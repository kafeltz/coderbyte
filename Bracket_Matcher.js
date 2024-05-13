// https://coderbyte.com/results/ismaelkafeltz:Bracket%20Matcher:JavaScript

function BracketMatcher(str) { 

  let deep = 0;

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (c === '(') {
      deep++;
    } else if (c === ')') {
      deep--;
    }
  }

  // console.log('<<<', deep, '>>>');

  // code goes here  
  return deep !== 0 ? 0 : 1; 
}
   
// keep this function call here 
console.log(BracketMatcher(readline()));
