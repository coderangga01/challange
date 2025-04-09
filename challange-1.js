function sum(){
    let x = 0;
    for (let i = 0; i < arguments.length; i++) {
      x += arguments[i];
    }
    console.log(x);
}
sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9);