
var countPrimes = function (n) {
    var isPrime = [],
      result = 0;
    for (var i = 2; i < n; i++) {
      if (isPrime[i] == undefined) {  // optimization i.e. proceed for only new numbers (not multiple of prime number)
        isPrime[i] = 1;
        result++;
                       // found prime number
        console.log(isPrime)
      }
      for (var j = 2; j * i < n; j++) { // multiple of prime number need to be discard we are setting value '0' to set certain value.
        isPrime[i * j] = 0;
        console.log(isPrime, 'w22r')

      }
      console.log(isPrime, 'we324r')

    }
        console.log(result, 'result ')
  }

  countPrimes(10)