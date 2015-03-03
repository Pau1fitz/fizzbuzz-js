describe('Fizzbuzz', function(){
  var fizzbuzz;

  describe('knows when a number is divisible', function(){

    it('by three', function(){
      fizzbuzz = new Fizzbuzz()
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('knows when a number is not divisible', function(){
    it('by three', function(){
    expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

  });

});