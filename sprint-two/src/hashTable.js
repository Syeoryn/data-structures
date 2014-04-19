var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var holder = this._storage.get(index) || [];
  holder.push([k,v]);
  this._storage.set(index,holder);
};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var holder = this._storage.get(index);
  if( holder !== undefined) {
    for(var i = 0; i < holder.length; i++){
      if(holder[i][0] === k){
        return holder[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k){
  var index = getIndexBelowMaxForKey(k,this._limit);
  var holder = this._storage.get(index);
  if( holder !== undefined){
    for(var i = 0; i < holder.length; i++){
      if(holder[i][0] ===k){
        holder.splice(i,1);
      }
    }
    this._storage.set(index,holder);
  }
};

