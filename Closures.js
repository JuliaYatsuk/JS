class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BT {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
        let Q = []; 
        if (this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                if (node.left === null){
                  node.left = new Node(data);
                  return;
                }
                else if (node.right === null){
                  node.right = new Node(data);
                  return;
                }
                else if (node.left != null) {
                    Q.push(node.left);
                    Q.push(node.right);
                }
              }
            };
            
        } 
  }
  addArr(arr) {
    let a = arr || [];
      
    for (let i =0;i<a.length;i++){
       this.add(a[i]);
   }
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = "";

      function traversePreOrder(node) {
        if (node.data!=null){ 
        result+="("+node.data;
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
        result+=")"
        } 
      };

      traversePreOrder(this.root);
      result = result.substring(1, result.length-1);
      return result;
    };
  }
  levelOrder() {
    let result = [];
    let Q = []; 
    if (this.root != null) {
        Q.push(this.root);
        while(Q.length > 0) {
            let node = Q.shift();
            result.push(node.data);
            if (node.left != null) {
                Q.push(node.left);
            };
            if (node.right != null) {
                Q.push(node.right);
            };
        };
        return result;
    } else {
        return null;
    };
};
  /*traverseDF(callback) {

    // это рекурсивная и мгновенно вызываемая функция 
    (function recurse(currentNode) {
        // шаг 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // шаг 3
            recurse(currentNode.children[i]);
        }
  
        // шаг 4
        callback(currentNode);
  
        // шаг 1
    })(this._root);
  
  };*/
      
}

const bst = new BT();
bst.addArr([9, 4, 17, 3, null, 22, 5, 7, 20]);
/*bst.add(9);
  bst.add(4);
  bst.add(17);
  bst.add(3);
  bst.add(null);
  bst.add(22);
  bst.add(5);
  bst.add(7);
  bst.add(20);*/
 console.log(bst);
 console.log('levelOrder: ' + bst.levelOrder());
 console.log('preOrder: ' + bst.preOrder());

/*function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data) {
  var node = new Node(data);
  this._root = node;
}

//Метод для прохождения дерева с помощью поиска в глубину
Tree.prototype.traverseDF = function(callback) {

  // это рекурсивная и мгновенно вызываемая функция 
  (function recurse(currentNode) {
      // шаг 2
      for (var i = 0, length = currentNode.children.length; i < length; i++) {
          // шаг 3
          recurse(currentNode.children[i]);
      }

      // шаг 4
      callback(currentNode);

      // шаг 1
  })(this._root);

};

Tree.prototype.contains = function(callback, traversal) {
  traversal.call(this, callback);
};

Tree.prototype.traverseBF = function(callback) {
  var queue = new Queue();

  queue.enqueue(this._root);

  currentTree = queue.dequeue();

  while(currentTree){
      for (var i = 0, length = currentTree.children.length; i < length; i++) {
          queue.enqueue(currentTree.children[i]);
      }

      callback(currentTree);
      currentTree = queue.dequeue();
  }
};


Tree.prototype.add = function(data, toData, traversal) {
  var child = new Node(data),
      parent = null,
      callback = function(node) {
          if (node.data === toData) {
              parent = node;
          }
      };
 
  this.contains(callback, traversal);

  if (parent) {
      parent.children.push(child);
      child.parent = parent;
  } else {
      throw new Error('Cannot add node to a non-existent parent.');
  }
};

/*var tree = new Tree('one');
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];
console.log(tree._root.children);
//console.log(tree._root);
tree.traverseDF(function(node) {
  console.log(node.data)
});

var tree = new Tree('CEO');

tree.add('VP of Happiness', 'CEO', tree.traverseBF);*/