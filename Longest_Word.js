// https://coderbyte.com/results/ismaelkafeltz:Longest%20Word:JavaScript

function LongestWord(sen) { 

  const words = sen.split(/[ ]/);

  let largestWord = '';

  sanitizedWord = (str) => str.replace(/([^a-z])/gi, '');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const cleanWord = sanitizedWord(word);

    if (cleanWord.length > largestWord.length) {
      largestWord = cleanWord;
    }
  }

  // code goes here  
  return largestWord; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
