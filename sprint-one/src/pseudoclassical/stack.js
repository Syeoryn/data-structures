var Stack = function() {

  // Use an object with numeric keys to store values
  this.storage = {};
  this.length = 0; // Hint: set an initial value here
};

Stack.prototype.size = function(){
  return this.length;
};
Stack.prototype.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};
Stack.prototype.pop =  function(){
  if(this.length){
    this.length--;
    var removed = this.storage[this.length];
    delete this.storage[this.length];
    return removed;
  }
};
