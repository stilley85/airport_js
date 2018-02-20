var Airport = function(){
};

// Airport.prototype.hangar = function() {
//   this.hangar = [];
// };

Airport.prototype.land = function(plane) {
  this.hangar = [];
  this.hangar.push(plane);
};

var airport = new Airport();

airport.land('a plane');
