describe ('Airport', function() {

  var airport;

  it("lands airplanes", function() {
    airport = new Airport();
    airport.land('plane');
    airport.land('another plane');
    expect(airport.hangar).toEqual(['plane', 'another plane']);
  });

  it("removes airplanes from the airport", function() {
    airport = new Airport();
    airport.land('plane');
    airport.land('another plane');
    airport.takeoff('plane')
    expect(airport.hangar).toEqual(['another plane']);
  });

});
