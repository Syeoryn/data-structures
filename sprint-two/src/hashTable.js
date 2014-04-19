var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._hashCount = 0;
};

HashTable.prototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var holder = this._storage.get(index) || [];
  this._hashCount++;
  holder.push([k,v]);
  this._storage.set(index,holder);
  if(this._hashCount > 0.75 * this._limit){
    this.rehash(this._limit * 2);
  }
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
    this._hashCount--;
    this._storage.set(index,holder);
    if(this._hashCount < 0.25 * this._limit){
      this.rehash(this._limit * 0.5);
    }
  }
};

HashTable.prototype.rehash = function(newLimit){
  this._hashCount = 0;
  this._limit = newLimit;
  var hashTable = this;
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(this._limit);
  oldStorage.each(function(holder){
    if(holder){
      for(var i = 0; i < holder.length; i++){
        hashTable.insert(holder[i][0],holder[i][1]);
      }
    }
  });
};

