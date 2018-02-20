describe ('Airport', function() {

  var airport;

  it("lands an airplane", function() {
    airport = new Airport();
    airport.land('plane');
    expect(airport.hangar()).toEqual(['plane']);


  });

});
