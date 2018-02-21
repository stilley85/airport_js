var Plane= function(){
  this.airbourne = true;
};

Plane.prototype.land = function(){
  this.airbourne = false;
}

Plane.prototype.takeoff = function(){
  this.airbourne = true;
}
