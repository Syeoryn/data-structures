var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  };

  list.removeHead = function(){
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;
  };

  list.contains = function(target, node){
    node = node || this.head;
    if(node.value === target) {
      return true;
    } else if(node.next){
      return this.contains(target,node.next);
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
