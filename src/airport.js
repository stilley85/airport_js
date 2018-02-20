var Airport = function(){
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
};

var airport = new Airport();

airport.land('a plane');
