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
    console.log("Cannot take off in stormy weather!");
  } else {
      var index = this.hangar.indexOf(plane);
      if (index === -1) {
        console.log("That plane is not at this airport!");
      } else {
        this.hangar.splice(index, 1);
      }
    }
  };

var airport = new Airport();

airport.land('a plane');
