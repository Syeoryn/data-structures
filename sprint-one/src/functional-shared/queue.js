var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.first = 0;
  instance.last = 0;

  _.extend(instance,queueMethods);

  return instance;
};

var queueMethods = {
  size: function(){
    return this.last - this.first;
  },
  enqueue: function(value){
    this.storage[this.last] = value;
    this.last++;
  },
  dequeue: function(){
    if(this.last - this.first){
      var removed = this.storage[this.first];
      delete this.storage[this.first];
      this.first ++;
      return removed;
    }
  }

};
