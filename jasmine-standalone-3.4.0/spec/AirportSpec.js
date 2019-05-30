describe('Airport', function() {
var airport;
var plane;

  beforeEach(function() {
    airport = new Airport;
    plane = new Plane;
  });

  it('is empty by default', function() {
    expect(airport.planes).toEqual([]);
  });

  it('can land a plane', function() {
    airport.land(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it('can allow a plane take off', function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).toEqual([]);
  });

});
