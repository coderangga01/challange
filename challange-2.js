function deretKaskus(n) {
    let hasil = []
    for (let a = 1; a <= n; a++) {
        let nilai = a*3
        if (nilai %5===0 && nilai %6===0) {
            hasil.push("KASKUS")
        } else if (nilai %5===0) {
            hasil.push("KAS")
        } else if (nilai %6===0) {
            hasil.push("KUS")
        } else {
            hasil.push(nilai)
        }
    }
    return hasil
}
console.log(deretKaskus(10));
