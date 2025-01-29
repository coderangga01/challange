function indexPrime(param1) {
    //write your code here
    const nilai = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
      let count = 0;
      let number = 2;
      while (count < param1) {
        if (nilai(number)) {
          count++;
        }
        number++; 
      }
      return number - 1; 
    }
console.log(indexPrime(4))//result => 7
console.log(indexPrime(500))//result => 3571
console.log(indexPrime(37786))//result => 450881