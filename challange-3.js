function romawi(num) {
    //write your code here
    const Romawiaja = [
        { angka: 1000, Roma: 'M' },
        { angka: 900, Roma: 'CM' },
        { angka: 500, Roma: 'D' },
        { angka: 400, Roma: 'CD' },
        { angka: 100, Roma: 'C' },
        { angka: 90, Roma: 'XC' },
        { angka: 50, Roma: 'L' },
        { angka: 40, Roma: 'XL' },
        { angka: 10, Roma: 'X' },
        { angka: 9, Roma: 'IX' },
        { angka: 5, Roma: 'V' },
        { angka: 4, Roma: 'IV' },
        { angka: 1, Roma: 'I' }
    ];
    let result = '';
    
    for (let i = 0; i < Romawiaja.length; i++) {
        while (num >= Romawiaja[i].angka) {
            result += Romawiaja[i].Roma;
            num -= Romawiaja[i].angka;
        }
    }
    return result;
}
console.log("Script testing untuk Konversi Romawi \n");
console.log("input  |  expected  |  result");
console.log("-------|------------|--------");
console.log("4      |  IV        |", romawi(4));
console.log("9      |  IX        |", romawi(9));
console.log("13     |  XIII      |", romawi(13));
console.log("1453   |  MCDLIII   |", romawi(1453));
console.log("1646   |  MDCXLVI   |", romawi(1646));         