var makeBinarySearchTree = function(value){
  var instance = Object.create(binarySearchMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;

  return instance;
};

var binarySearchMethods = {
  insert: function(value){
    if(this.value === value){
      return false;
    }
    var side = value < this.value ? 'left' : 'right';
    if(this[side]){
      this[side].insert(value);
      return true;
    } else {
      this[side] = makeBinarySearchTree(value);
      return true;
    }
  },
  contains: function(target){
    if(this.value === target){
      return true;
    } else{
      if(this.left && target < this.value){
        return this.left.contains(target);
      } else if(this.right && target > this.value){
        return this.right.contains(target);
      }
    }
    return false;
  },
  depthFirstLog: function(callback){
    if(this.value){callback(this.value);}
    if(this.left){this.left.depthFirstLog(callback);}
    if(this.right){this.right.depthFirstLog(callback);}
  }
};
