#include "git-gud.hpp"

#include <string>
#include <sstream>
#include <iostream>
#include <memory>
#include <vector>
#include <stdexcept> // invalid_argument
#include <algorithm> // find

using namespace git_gud;

GitTree::GitTree()
{
	auto firstCommit = std::make_shared<Commit>(nextBranchID++, nextCommitID++);
	this->commits.push_back(firstCommit);
	this->head = firstCommit;
	this->numBranches = 1;
    this->branch_heads.push_back(this->head);
}

std::shared_ptr<Commit> GitTree::getCommit(int ID) const
{
	// Iterate through the commit list
	for (std::shared_ptr<Commit> c_ptr : this->commits)
	{
		if (c_ptr->getID() == ID)
		{
			return c_ptr;
		}
	}

	// The ID didn't exist!
	std::ostringstream msg;
	msg << "ID " << ID << " not found!";
	throw msg.str();
}

std::shared_ptr<Commit> GitTree::getHead() const
{
	return this->head;
}

int GitTree::getCurrentBranch() const
{
  return this->currentBranch;
}

bool GitTree::isHead(int commitID) const
{
	return this->head->getID() == commitID;
}

std::shared_ptr<Commit> GitTree::getLatest() const
{
	if (this->commits.empty()) {return NULL;}
	return this->commits.back();
}

std::shared_ptr<Commit> GitTree::getLatest(int branchID) const
{
  if (branchID < 0 || this->numBranches <= branchID) {
    throw "branchId must be between 0 and numBranches";
  }

	std::shared_ptr<Commit> latest = NULL;
	for (auto ptr : this->commits)
	{
		if (ptr->getBranch() == branchID)
		{
			latest = ptr;
		}
	}

	return latest;
}

std::vector<std::shared_ptr<Commit> >& GitTree::getAllCommits()
{
	return this->commits;
}

int GitTree::getNumBranches() const
{
	return this->numBranches;
}

int GitTree::getNumCommits() const
{
	return this->commits.size();
}

std::vector<int> GitTree::getAllBranchIDs() const
{
	std::vector<int> ids;

	// iterate through all commits
	for (auto commit : this->commits)
	{
		// check if the commit's branch is already in the list
		if(std::find(ids.begin(), ids.end(), commit->getBranch()) == ids.end())
		{
    		// ID not already added
    		ids.push_back(commit->getBranch());
		}
	}

	return ids;
}

std::vector<int> GitTree::getAllCommitIDs() const
{
	std::vector<int> ids;
	for (auto commit : this->commits)
	{
		ids.push_back(commit->getID());
	}

	return ids;
}

bool GitTree::isValidBranchID(int id) const
{
	auto ids = getAllBranchIDs();

	// If the id is found, then it is valid
	return std::find(ids.begin(), ids.end(), id) != ids.end();
}

bool GitTree::isValidCommitID(int id) const
{
	auto ids = getAllCommitIDs();

	// If the id is found, then it is valid
	return std::find(ids.begin(), ids.end(), id) != ids.end();
}

std::shared_ptr<Commit> GitTree::addCommit() {
  for (auto child : this->head->getChildren()) {
    if (child->getBranch() == this->currentBranch) {
      throw "cannot make second child on same branch";
    }
  }

  auto commit = std::make_shared<Commit>(this->currentBranch, nextCommitID++);

  this->branch_heads[this->currentBranch]->addChild(commit);
  commit->addParent(this->branch_heads[this->currentBranch]);

  this->head = commit;
  this->branch_heads[this->currentBranch] = commit;

  this->commits.push_back(commit);
  
	return commit;
}

std::shared_ptr<Commit> GitTree::merge(int branchID)
{
  if (this->currentBranch == branchID) {
    throw "Cannot merge branch into itself";
  }
  if (!this->getLatest(this->currentBranch)) {
    throw "Cannot merge into empty branch";
  }
  auto latest = this->getLatest(branchID);
  if (!latest) {
    throw "Cannot merge from empty branch";
  }
	this->addCommit();
  this->head->addParent(latest);
  latest->addChild(this->head);
  return this->head;
}

void GitTree::checkout(int branchID)
{
  if (branchID < 0 || branchID >= this->numBranches) {
    throw "branchID not positive or too big";
  }
  this->currentBranch = branchID;

	// getLatest() will throw invalid_argument if not found
  auto latest = getLatest(branchID);
  if (latest) {
    checkoutCommit(latest->getID());
  }
}

int GitTree::branch() {
  this->branch_heads.push_back(this->head);
  return this->numBranches++;
}

void GitTree::checkoutCommit(int commit)
{
	this->head = getCommit(commit);
  this->currentBranch = this->head->getBranch();
}

void GitTree::undo()
{
	// Don't undo the first commit
	if (this->commits.size() <= 1) { return; }

	auto last = getLatest();
	this->commits.pop_back();

	// If the head is at the undone commit, move it to the previous commit
	if (this->head->getID() == last->getID())
	{
		this->head = getLatest();
	}

	// If it's a new branch, the number of branches is reduced by one
	if (last->isNewBranch())
	{
		numBranches--;
		nextBranchID--;
	}

	auto parents = last->getParents();

	for (auto parent : parents)
	{
		parent->removeChild(last->getID());
	}

	nextCommitID--;
}

void GitTree::reset()
{
	this->commits.clear();
    this->branch_heads.clear();
	this->nextCommitID = 0;
	this->nextBranchID = 0;

	auto firstCommit = std::make_shared<Commit>(nextBranchID++, nextCommitID++);
	this->commits.push_back(firstCommit);
    this->head = firstCommit;
    this->branch_heads.push_back(this->head);
	this->numBranches = 1;
    this->currentBranch = 0;
}

void GitTree::print() const
{
	std::cout << "...\n";
	std::cout << "GitTree\n";
	std::cout << "Number of branches: " << getNumBranches() << "\n";
	std::cout << "Number of commits: " << getNumCommits() << "\n";
	std::cout << "Next branch ID: " << nextBranchID << "\n";
	std::cout << "Next commit ID: " << nextCommitID << "\n";

	for (auto ptr : this->commits) {

		if (this->head == ptr)
		{
			std::cout << "HEAD\n";
		}
		ptr->print();
	}

	std::cout << "...\n";
}
