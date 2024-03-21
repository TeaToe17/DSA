// SET

function has(set, element) {
  if (set.includes(element)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

function myadd(set, element) {
  if (!has(set, element)) {
    set.push(element);
  }
}

function myremove(set, element) {
  if (has(set, element)) {
    set.splice(set.indexOf(element), 1);
  }
}

function myintersection(setA, setB) {
  var intersects = [];
  for (a = 0; a < setA.length; a++) {
    if (has(setB, setA[a])) {
      console.log(setA[a]);
      console.log(setB);
      intersects.push(setA[a]);
    }
  }
  console.log(intersects);
}

myset = [2, 6, 3, 7, 9];
yourset = [1, 4, 3, 9, 8];
myintersection(myset, yourset);

//BINARY SEARCH TREE

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node == null) {
      this.root = new Node(data);
      return;
    } else {
      const searchtree = function (node) {
        if (data < node.data) {
          if (node.left == null) {
            node.left = new Node(data);
          } else {
            return searchtree(node.left);
          }
        } else if (data > node.data) {
          if (node.right == null) {
            node.right = new Node(data);
          } else {
            return searchtree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchtree(node);
    }
  }
  findmin() {
    let current = this.root;
    while (current.left != null) {
      return (current = current.left);
    }
    return current.data;
  }
  findmax() {
    let current = this.root;
    while (current.right != null) {
      current = current.right;
    }
    console.log(current);
    return current.data;
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    console.log(`left:${left}`);
    let right = this.findMinHeight(node.right);
    console.log(`right:${right}`);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
}

const bst = new Bst();

bst.add(9);
bst.add(4);
bst.add(3);
bst.add(6);
bst.add(5);
bst.add(7);
bst.add(17);
bst.add(22);
bst.add(20);
// console.log(bst.findmax());
console.log(bst.findMinHeight());

// LINKEDLIST

function Linkedlist() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };
  this.add = function (element) {
    var node = new Node(element);
    if (head == null) {
      head = node;
    } else {
      var currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };
  this.indexOf = function (element) {
    var currentNode = head;
    var index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element == element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };
}

var mytest = new Linkedlist();
mytest.add("yes");
mytest.add("no");
mytest.add("her");
mytest.add("him");
mytest.add("we");
console.log(mytest.indexOf("him"));

//TRIE

let Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setend = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};

let Trie = function () {
  this.root = new Node();
  this.add = function (input, node = this.root) {
    if (input.length == 0) {
      node.setend();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };
  this.print = function () {
    let words = new Array();
    let search = function (node = this.root, string) {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  };
};

mytest = new Trie();
mytest.add("hey");
mytest.add("swim");
mytest.add("her");
mytest.add("yellow");
console.log(mytest.print());
