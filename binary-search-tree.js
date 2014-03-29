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
      this.right.insert(node);
    }
  }

  if (v < ths.value) {
    if (this.left === null) {
      this.left = node;
    }else {
      this.left.insert(node);
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
    cb(q[0]);
    if (q[0].left) {
      q.push(q.left);
    }
    if (q[0].right) {
      q.push(q.right);
    }
  }
};

