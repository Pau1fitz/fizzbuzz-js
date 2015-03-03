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

  describe('returns a keyword if number is divisible', function(){

    it('by three', function(){
      expect(fizzbuzz.gameReturn(3)).toEqual('Fizz')
    });

    it('by five', function(){
      expect(fizzbuzz.gameReturn(5)).toEqual('Buzz')
    });

    it('by fifteen', function(){
      expect(fizzbuzz.gameReturn(15)).toEqual('FizzBuzz')
    });
  });

  describe('returns number when number is not divisible', function(){

    it('by three', function(){
      expect(fizzbuzz.gameReturn(1)).toEqual(1)
    });

    it('by five', function(){
      expect(fizzbuzz.gameReturn(7)).toEqual(7)
    });

    it('by fifteen', function(){
      expect(fizzbuzz.gameReturn(14)).toEqual(14)
    });
  });

});