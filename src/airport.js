var Airport = function(){
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
};

Airport.prototype.isStormy = function () {
  var chance = Math.floor((Math.random() * 10) + 1);
  if (chance < 3) {
    return true;
  } else {
    return false;
  }
};

Airport.prototype.takeoff = function(plane) {
  if (this.isStormy()===true) {
    console.log("NO!");
  } else {
      var index = this.hangar.indexOf(plane);
      if (index === -1) {
        console.log("NO!");
      } else {
        this.hangar.splice(index, 1);
      }
    }
  };

var airport = new Airport();

airport.land('a plane');
