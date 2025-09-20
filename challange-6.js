function sentencesManipulation(sentence) {
    const vokal = 'aiueo';
    const words = sentence.split(' '); 
    let result = ''; 

    for (let i = 0; i < words.length; i++) {
      let kata = words[i];
      let firstChar = kata[0].toLowerCase();
  
      if (vokal.includes(firstChar)) {
        result += kata;
      } else {
        let sisa = kata.slice(1); 
        result += sisa + firstChar + 'nyo'; 
      }
        if (i < words.length - 1) {
        result += ' ';
      }
    }
      console.log(result);
  }
    sentencesManipulation("ibu pergi ke pasar bersama aku");