var Fizzbuzz = function() {

  Fizzbuzz.prototype.isDivisibleByThree = function(number){
    // console.log(number)
    return number % 3 === 0;
  };

  Fizzbuzz.prototype.isDivisibleByFive = function(number){
    return number % 5 === 0;
  };

};
