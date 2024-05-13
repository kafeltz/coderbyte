// https://coderbyte.com/results/ismaelkafeltz:Find%20Intersection:JavaScript

function FindIntersection(strArr) { 
  const a = strArr[0].split(/,\s?/).map(x => parseInt(x, 10));
  const b = strArr[1].split(/,\s?/).map(x => parseInt(x, 10));
  const output = [];

  let i = 0;
  let j = 0;

  while(true) {
    if (i >= a.length || j >= b.length) {
      break;
    }

    if (a[i] == b[j]) {
      output.push(a[i]);
      i++;
      j++;
    } else if (a[i] > b[j]) {
      j++;
      continue;
    } else if (a[i] < b[j]) {
      i++;
      continue;
    }
  }


  // code goes here  
  return output.length > 0 ? output : false; 

}
   
// keep this function call here 
console.log(FindIntersection(readline()));
