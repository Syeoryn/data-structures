var Graph = function(){
  this.nodes = {};
  this.edges = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var sNode = JSON.stringify(newNode);
  this.edges[sNode] = {};
  if(toNode){
    this.addEdge(newNode,toNode);
  }
  if(Object.keys(this.nodes).length === 1){
    this.addEdge(newNode, this.nodes[Object.keys(this.nodes)[0]]);
  }
  this.nodes[sNode] = newNode;
};

Graph.prototype.contains = function(node){
  if(JSON.stringify(node) in this.nodes) {
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  var sNode = JSON.stringify(node);
  var removed = this.nodes[sNode];
  for(var edge in this.edges[sNode]){
    this.removeEdge(this.edges[sNode][edge],node );
  }
  delete this.nodes[sNode];
  return removed;
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return JSON.stringify(toNode) in this.edges[JSON.stringify(fromNode)];
};

Graph.prototype.addEdge = function(fromNode, toNode){
    var sFromNode = JSON.stringify(fromNode);
    var sToNode = JSON.stringify(toNode);

  this.edges[sFromNode][sToNode] = toNode;
  this.edges[sToNode][sFromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var sFromNode = JSON.stringify(fromNode);
  var sToNode = JSON.stringify(toNode);

  delete this.edges[sFromNode][sToNode];
  delete this.edges[sToNode][sFromNode];

  if(!Object.keys(this.edges[sFromNode]).length){
    this.removeNode(this.nodes[sFromNode]);
  }
  if(!Object.keys(this.edges[sToNode]).length){
    this.removeNode(this.nodes[sToNode]);
  }

};

