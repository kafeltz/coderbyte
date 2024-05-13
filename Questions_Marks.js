// https://coderbyte.com/results/ismaelkafeltz:Questions%20Marks:JavaScript

function QuestionsMarks(str) { 

  const charIsNumber = (char) => (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57);

  let first = false;

  let totalQuestionMark = 0;

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (charIsNumber(c) && !first) {
      first = true;
      sum = parseInt(c, 10);
    } else if (first && c === '?') {
      totalQuestionMark++;
    } else if (totalQuestionMark === 3 && charIsNumber(c)) {
      sum += parseInt(c, 10);
    
      // console.log(`{{{ i=${i}`, first, c, `sum=${sum}`, `totalQuestionMark=${totalQuestionMark}`, '}}}');
      
      if (sum === 10) {
        return true;
      }
    }
  }
}
   
// keep this function call here 
console.log(QuestionsMarks(readline()));
