describe ('Plane', function() {

  var plane;

  it("initializes as airbourne", function() {
    plane = new Plane();
    expect(plane.airbourne).toEqual(true);
  });

  it("land changes airbourne status to false", function() {
    plane = new Plane();
    plane.land();
    expect(plane.airbourne).toEqual(false);
  });

  it("takeoff changes airbourne status to true", function() {
    plane = new Plane();
    plane.takeoff();
    expect(plane.airbourne).toEqual(true);
  });

});
