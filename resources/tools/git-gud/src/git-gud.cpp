#include "emscripten.h"

#include "git-gud.hpp"

extern "C" {
  extern void print(const char* message);
  extern void main_done();
  extern void draw_bg(int numColumns, int branch, int head);
  extern void end_draw(int numColumns);
  extern void draw_commit_circle(int ID, int x, int y, bool isHead);
  extern void connect_circles(int tx, int ty, int bx, int by, bool isMerge);
}

git_gud::GitTree tree;

int main() {
  main_done();
}

extern "C" {
  EMSCRIPTEN_KEEPALIVE
  void draw() {
    auto head = tree.getHead();
    draw_bg(tree.getNumBranches(), tree.getCurrentBranch(), tree.getHead()->getID());
    for (auto commit : tree.getAllCommits()) {
      draw_commit_circle(commit->getID(),commit->getBranch(), commit->getID(), tree.isHead(commit->getID()));

      for (auto parent : commit->getParents()) {
        connect_circles(
          parent->getBranch(), parent->getID(),
          commit->getBranch(), commit->getID(),
          commit->isMergeCommit()
        );
      }
    }
    end_draw(tree.getNumBranches());
  }
  
  EMSCRIPTEN_KEEPALIVE
  void init() {
    tree.reset();
  }

  EMSCRIPTEN_KEEPALIVE
  void commit() {
    tree.addCommit();
  }

  EMSCRIPTEN_KEEPALIVE
  void branch() {
    tree.branch();
  }

  EMSCRIPTEN_KEEPALIVE
  void merge(int branch) {
    tree.merge(branch);
  }

  EMSCRIPTEN_KEEPALIVE
  void checkout_branch(int branch) {
    tree.checkout(branch);
  }

  EMSCRIPTEN_KEEPALIVE
  void checkout_commit(int commit) {
    tree.checkoutCommit(commit);
  }
}
