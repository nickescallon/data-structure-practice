var BsTree = function(v) {
  this.value = v;
  this.left = null;
  this.right = null;
};

BsTree.prototype.insert = function(v) {
  var node = new BsTree(v);
  if (v > this.value) {
    if (this.right === null) {
      this.right = node;
    }else {
      this.right.insert(node.value);
    }
  }

  if (v < this.value) {
    if (this.left === null) {
      this.left = node;
    }else {
      this.left.insert(node.value);
    }
  }
};

BsTree.prototype.dTraverse = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.dTraverse(cb);
  }
  if (this.right) {
    this.right.dTraverse(cb);
  }
};

BsTree.prototype.bTraverse = function(cb) {
  var q = [];
  q.push(this)

  while (q.length) {
    var cur = q.shift();
    cb(cur.value);
    if (cur.left) {
      q.push(cur.left);
    }
    if (cur.right) {
      q.push(cur.right);
    }
  }
};

//TESTS//

// var root = new BsTree(10);

// root.insert(5);
// root.insert(15);
// root.insert(2);
// root.insert(6);
// root.insert(11);
// root.insert(16);

// var log = function(val) {
//   console.log(val);
// }
// root.dTraverse(log);
// root.bTraverse(log);
// console.log(root);
