var Airport = function(){
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  var index = this.hangar.indexOf(plane);
  this.hangar.splice(index, 1);
};

var airport = new Airport();

airport.land('a plane');
