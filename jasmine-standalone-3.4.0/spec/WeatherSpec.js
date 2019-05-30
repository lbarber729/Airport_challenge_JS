describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather;
  });

  it('can be stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.9);
    expect(weather.isStormy()).toBe(true);
  });

});
