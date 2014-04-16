var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[last] = value;
    last++;
  };

  instance.dequeue = function(){
    if(last -first >0){
      var  removed = storage[first];
      delete storage[first];
      first++;
      return removed;
    }

  };

  instance.size = function(){
    return last - first;
  };

  return instance;
};


