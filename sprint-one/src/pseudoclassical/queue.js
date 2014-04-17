var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here

  // Use an object with numeric keys to store values
  this.storage = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.size = function(){
  return this.last - this.first;
};
Queue.prototype.enqueue =function(value){
  this.storage[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function(){
  if(this.last - this.first){
    var removed = this.storage[this.first];
    delete this.storage[this.first];
    this.first ++;
    return removed;
  }
};
