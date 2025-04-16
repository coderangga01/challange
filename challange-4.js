function indexPrime(param1) {
    let n = 0;
    let a = 2;
    while (n < param1) {
        if (checker(a)) {
            n++;
        }
        a++;
    }
    return a - 1;
}

function checker(angka) {
    if (angka < 2) return false;
    for (let i = 2; i < angka; i++) {
        if (angka % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(indexPrime(4));      //result => 7
console.log(indexPrime(500));    //result => 3571
console.log(indexPrime(37786));  //result => 450881