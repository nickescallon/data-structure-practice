//linked List

var List = function() {
  this.head = null;
  this.tail = null;
};

List.prototype.addToTail = function(v) {
  var node = new Node(v);
  if (this.head === null) {
    this.head = node;
  }
  if (this.tail) {
    node.prev = this.tail;
    this.tail.next = node;
  }
  this.tail = node;
};

List.prototype.addToHead = function(v) {
  var node = new Node(v);
  if (this.tail === null) {
    this.tail = node;
  }
  if (this.head) {
    node.next = this.head;
    this.head.prev = node;
  }
  this.head = node;
};

List.prototype.popHead = function() {
  if (this.head === null) {
    return "No Head";
  }

  var val = this.head.value;

  if (this.head.next) {
    this.head = this.head.next;
    this.head.prev = null;
  }else {
    this.head = null;
    this.tail = null;
  }

  return val; 
};

List.prototype.popTail = function() {
  if (this.tail === null) {
    return "No Tail";
  }

  var val = this.tail.value;

  if (this.tail.prev) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }else {
    this.head = null;
    this.tail = null;
  }

  return val; 
};

List.prototype.contains = function(v) {
  var start = this.head;
  while (start){
    if (start.value === v) {
      return true;
    }
    start = start.next;
  }
  return false;
};

List.prototype.print = function() {
  var start = this.head;
  while (start) {
    console.log(start.value);
    start = start.next;
  }
};

List.prototype.reverse = function() {
  var temp = this.tail;

  while (temp.prev) {
    var t = temp.next;
    temp.next = temp.prev;
    temp.prev = t;
    temp = temp.next;
  }

  temp.prev = temp.next;
  temp.next = null;

  this.head = this.tail;
  this.tail = temp;
};

var Node = function(v) {
  this.value = v;
  this.next = null;
  this.prev = null;
};
