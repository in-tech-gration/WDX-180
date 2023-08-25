#include "git-gud.hpp"

#include <memory>
#include <iostream>

using namespace git_gud;

int main (void)
{
	GitTree tree;
	tree.print();

	std::cout << "Add commit to HEAD\n";

	tree.addCommit();
	tree.print();

	std::cout << "Add another commit to HEAD\n";

	tree.addCommit();
	tree.print();

	std::cout << "Create a new branch at HEAD\n";
	tree.addCommitNewBranch();
	tree.print();

	std::cout << "Create a new commit on that branch\n";
	tree.addCommit();
	tree.print();

	std::cout << "Undo that commit\n";
	tree.undo();
	tree.print();

	std::cout << "Undo the new branch\n";
	tree.undo();
	tree.print();

	std::cout << "Make a new branch on a new branch\n";
	tree.addCommitNewBranch(tree.addCommitNewBranch()->getID());
	tree.print();

	std::cout << "Current commits IDs: ";
	for (auto i : tree.getAllCommitIDs())
	{
		std::cout << i << ", ";
	}

	std::cout << "\nCurrent branch IDs: ";
	for (auto i : tree.getAllBranchIDs())
	{
		std::cout << i << ", ";
	}
	std::cout << "\n";

	std::cout << "Setting branch 2 as HEAD\n";
	tree.checkout(2);
	tree.print();


	std::cout << "Merging branch 3\n";
	tree.merge(1);
	tree.print();

	std::cout << "Undoing the merge\n";
	tree.undo();
	tree.print();

	std::cout << "Has commit 5: " << tree.isValidCommitID(5) << "\n";
	std::cout << "Has commit 7: " << tree.isValidCommitID(7) << "\n";
	std::cout << "Has branch 3: " << tree.isValidBranchID(3) << "\n";
	std::cout << "Had branch 5: " << tree.isValidBranchID(5) << "\n";

	std::cout << "Get all commits\n";
	auto commits = tree.getAllCommits();

	for (auto ptr : commits)
	{
		ptr->print();
	}

	std::cout << "Resetting!\n";
	tree.reset();
	tree.print();

	// SUCCESSFULLY ERRORS
	//std:: cout << "Merging with non-existant branch 5\n";
	//tree.merge(7);
	//tree.print();

}