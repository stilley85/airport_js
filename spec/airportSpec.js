describe ('Airport', function() {

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'takeoff']);
  });

  it("initializes with an empty hangar", function() {
    expect(airport.hangar).toEqual([]);
  });

  it("planes can land if not stormy", function() {
    spyOn(Math, 'random').and.returnValue(10)
    airport.land(plane)
    expect(plane.land).toHaveBeenCalled();
    expect(airport.hangar).toContain(plane);
  });

  it("planes cannot land if stormy", function() {
    spyOn(Math, 'random').and.returnValue(0)
    airport.land(plane)
    expect(plane.land).not.toHaveBeenCalled();
    expect(airport.hangar).not.toContain(plane);
  });

  it("planes can take off if not stormy", function() {
    spyOn(Math, 'random').and.returnValue(10)
    airport.land(plane);
    airport.takeoff(plane)
    expect(airport.hangar).not.toContain(plane);
  });

  it("planes cannot take off if stormy", function() {
    spyOn(Math, 'random').and.returnValues(10, 0);
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.hangar).toContain(plane);
  });

});
