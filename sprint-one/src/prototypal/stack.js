var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0; // Hint: set an initial value here


  return instance;
};

var stackMethods = {
  size : function(){
    return this._size;
  },
  push: function(value){
    this._storage[this._size] = value;
    this._size++;
  },
  pop: function(){
    if(this._size){
      this._size--;
      var removed = this._storage[this._size];
      delete this._storage[this._size];
      return removed;
    }
  }
};
