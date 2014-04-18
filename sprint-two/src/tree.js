var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  extend(newTree,treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newNodeTree = makeTree(value);
  if(!this.children){
    this.children = [];
  }
  this.children.push(newNodeTree);
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  } else if(this.children){
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].contains(target)){
        return true;
      };
    }
  }
  return false;
};

function extend(to,from){
  for(key in from){
    if(!(key in to)){
      to[key]= from[key];
    }
  }
}
