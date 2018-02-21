describe ('Airport', function() {

  var airport;

  it("lands airplanes", function() {
    airport = new Airport();
    airport.land('plane');
    airport.land('another plane');
    expect(airport.hangar).toContain('plane');
    expect(airport.hangar).toContain('another plane');
  });

  it("removes airplanes from the airport", function() {
    airport = new Airport();
    airport.land('plane');
    airport.land('another plane');
    spyOn(Math, 'random').and.returnValue(10)
    airport.takeoff('plane')
    expect(airport.hangar).toContain('another plane');
    expect(airport.hangar).not.toContain('plane');
  });

  it("doesn't allow planes to take off if stormy", function() {
    airport = new Airport();
    airport.land('plane');
    spyOn(Math, 'random').and.returnValue(0.1)
    airport.takeoff('plane');
    expect(airport.hangar).toContain('plane');
  });

});
