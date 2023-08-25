#include "git-gud.hpp"

#include <iostream>
#include <memory>
#include <vector>

using namespace git_gud;

Commit::Commit(int branchID, int commitID)
{
	this->commitID = commitID;
	this->branchID = branchID;
}

int Commit::getID() const {return this->commitID;}
int Commit::getBranch() const {return this->branchID;}
int Commit::getNumParents() const {return this->parents.size();}
int Commit::getNumChildren() const {return this->children.size();}
bool Commit::isMergeCommit() const {return getNumParents() >= 2;}
bool Commit::isNewBranch() const
{
	if (isMergeCommit()) {return false;}
	if (getNumParents() == 0) {return true;}
	else
	{
		auto parent = this->parents[0];
		if (parent->getBranch() != this->getBranch())
		{
			return true;
		}

		return false;
	}
}

std::vector<std::shared_ptr<Commit> >& Commit::getParents()
{
	return this->parents;
}

std::vector<std::shared_ptr<Commit> >& Commit::getChildren()
{
	return this->children;
}

void Commit::addParent(std::shared_ptr<Commit> parent)
{
	if (parent->getID() == getID())
	{
		throw "Cannot add itself as a parent!";
	}

	this->parents.push_back(parent);
}

void Commit::addChild(std::shared_ptr<Commit> child)
{
	if (child->getID() == getID())
	{
		throw "Cannot add itself as a child!";
	}

	this->children.push_back(child);
}

void Commit::removeParent(int id)
{
	int index = -1;
	for (auto ptr : this->parents)
	{
		index++;
		if (ptr->getID() == id)
		{
			break;
		}
	}

	if (index == -1)
	{
		throw "Cannot find parent!";
	}

	this->parents.erase(this->parents.begin() + index);
}

void Commit::removeChild(int id)
{
	int index = -1;
	for (auto ptr : this->children)
	{
		index++;
		if (ptr->getID() == id)
		{
			break;
		}
	}

	if (index == -1)
	{
		throw "Cannot find child!";
	}

	this->children.erase(this->children.begin() + index);
}

void Commit::print()
{
	std::cout << "ID: " << getID() << ", Branch: " << getBranch() << "\n";
	std::cout << "Parents: ";
	for (auto p : getParents()) {std::cout << p->getID() << ", ";}
	std::cout << "\nChildren: ";
	for (auto c : getChildren()) {std::cout << c->getID() << ", ";}
	std::cout << "\n";
}