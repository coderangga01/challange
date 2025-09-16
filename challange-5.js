function stringManipulation(word) {
                 const vokal = 'aiueo';
          let firstChar = word.charAt(0);
                if (vokal.includes(firstChar)) {
          console.log(word); 
        } else {
                    let sisa = word.substring(1); 
          console.log(sisa + firstChar + "lieur");
        }
      }
stringManipulation("ayam");
stringManipulation("bebek");
