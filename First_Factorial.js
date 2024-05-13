// https://coderbyte.com/results/ismaelkafeltz:First%20Factorial:JavaScript

function FirstFactorial(num) { 

  if (num == 0 || num == 1) {
    return 1;
  }

  let total = 1;

  for (let i = 1; i < num; i++) {
    total *= (i + 1);
    // console.log('{{{', total, i, '}}}');
  }

  // code goes here  
  return total; 

}
   
// keep this function call here 
console.log(FirstFactorial(readline()));
