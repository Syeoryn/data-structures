var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this._storage){
    this._storage = {};
  }
  var key = JSON.stringify(item);
  this._storage[key] = item;
};

setPrototype.contains = function(item){
  var key = JSON.stringify(item);
  return(this._storage[key] === item);
};

setPrototype.remove = function(item){
  var key = JSON.stringify(item);
  return delete this._storage[key];
};
