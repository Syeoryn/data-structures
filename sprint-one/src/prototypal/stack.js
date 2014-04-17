var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0; // Hint: set an initial value here


  return instance;
};

var stackMethods = {
  size : function(){
    return this.length;
  },
  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function(){
    if(this.length){
      this.length--;
      var removed = this.storage[this.length];
      delete this.storage[this.length];
      return removed;
    }
  }
};
