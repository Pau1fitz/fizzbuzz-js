describe('Fizzbuzz', function(){
  var fizzbuzz;

  describe('knows when a number is divisible', function(){

    fizzbuzz = new Fizzbuzz()

    it('by three', function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('by five', function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('by fifteen', function(){
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is not divisible', function(){

    it('by three', function(){
    expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('by five', function(){
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('by fifteen', function(){
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });

});