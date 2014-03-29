var List = require('./linkedList'); //importing my linked list to use as storage

var makeStack = function() {
  var instance = {}
  var storage = new List();
  var size = 0;

  instance.add = function(v) {
    storage.addToHead(v);
    size++;
  }

  instance.pop = function() {
    size = size > 0 ? --size : 0;
    return storage.popHead()
  }

  instance.size = function() {
    return size;
  }

  return instance;
};

//TESTS//
// var a = makeStack();

// a.add(1);
// a.add(2);
// a.add(3);
// console.log("size: ", a.size());
// console.log(a.pop());
// console.log("size: ", a.size());
// console.log(a.pop());
// console.log("size: ", a.size());
// console.log(a.pop());
// console.log("size: ", a.size());
// console.log(a.pop());
// console.log("size: ", a.size());