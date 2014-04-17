var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._first = 0;
  instance._last = 0;


  return instance;
};

var queueMethods = {
  size: function(){
    return this._last - this._first;
  },
  enqueue: function(value){
    this._storage[this._last] = value;
    this._last++;
  },
  dequeue: function(){
    if(this._last - this._first){
      var removed = this._storage[this._first];
      delete this._storage[this._first];
      this._first ++;
      return removed;
    }
  }
};
