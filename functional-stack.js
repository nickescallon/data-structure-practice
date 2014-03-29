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
    size--;
    return storage.popHead()
  }

  instance.size = function() {
    return size;
  }

  return instance;
}

