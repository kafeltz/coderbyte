// https://coderbyte.com/results/ismaelkafeltz:Tree%20Constructor:JavaScript

function TreeConstructor(strArr) { 

  const binaryTree = {};

  for (let i = 0; i < strArr.length; i++) {

    const item = strArr[i].split(',');
    const son = parseInt(item[0].replace(/[^0-9]/gi, ''), 10);
    const father = parseInt(item[1].replace(/[^0-9]/gi, ''), 10);

    if (!binaryTree[father]) {
      binaryTree[father] = [son];
    } else {
      binaryTree[father].push(son);
    }

    if (binaryTree[father].length > 2) {
      return false;
    }
  }
  
  // console.log('<<<', binaryTree , '>>>');   

  return true; 
}
   
// keep this function call here 
console.log(TreeConstructor(readline()));

// Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
// Output: true

// 7
// 5
// 4 9
// 2
// 1


// Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
// Output: false



// 12
// 2 
// 1 3 5
//
