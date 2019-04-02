/* Binary Tree to String */

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
 console.log('To string: ' + bst.preOrder());










