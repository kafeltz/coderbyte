// https://coderbyte.com/results/ismaelkafeltz:Bracket%20Combinations:JavaScript
// 2 = 2
// 3 = 5


function BracketCombinations(num) { 

  if (num == 2) {
    return 2;
  }

  let n = 1;
  
  for (let i = 1; i <= num; i) {
    n += n * (i + 1);
  }

  return n - 1;

}
   
// keep this function call here 
console.log(BracketCombinations(readline()));
