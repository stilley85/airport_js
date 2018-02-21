debugger;

var Airport = function(){
  this.hangar = [];
};

const CAPACITY = 3

Airport.prototype.isStormy = function () {
  var chance = Math.floor((Math.random() * 10) + 1);
  if (chance < 3) {
    return true;
  } else {
    return false;
  }
};

Airport.prototype.land = function(plane) {
  if (this.hangar.length >= CAPACITY) {
    throw new Error("The airport is full!")
  } else if (this.isStormy()===true) {
    console.log("Cannot land in stormy weather!")
  } else {
    this.hangar.push(plane);
    plane.land();
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
      plane.takeoff();
    }
  }
};
