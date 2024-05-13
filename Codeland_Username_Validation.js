// https://coderbyte.com/results/ismaelkafeltz:Codeland%20Username%20Validation:JavaScript

function CodelandUsernameValidation(str) { 

  const isLetter = (charCode) => (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);

  const rule_username_range = function(str) {
    const total = str.length;

    return total >= 4 && total <= 25;
  };

  const rule_start_with_letter = function(str) {
    const c = str[0].charCodeAt(0);

    return isLetter(c);
  };

  const rule_only_contains_letter_numbers_underscore = function(str) {
    return str.match(/[a-z0-9_]+/gi) !== null;
  };

  const rule_cannot_ends_with_underscore = function(str) {
    const c = str[str.length - 1];

    return c !== '_';
  };

  // console.log('rule_username_range', rule_username_range(str));
  // console.log('rule_start_with_letter', rule_start_with_letter(str)); 
  // console.log('rule_only_contains_letter_numbers_underscore', rule_only_contains_letter_numbers_underscore(str));
  // console.log('rule_cannot_ends_with_underscore', rule_cannot_ends_with_underscore(str));

  // code goes here  
  return rule_username_range(str) && 
         rule_start_with_letter(str) && 
         rule_only_contains_letter_numbers_underscore(str) &&
         rule_cannot_ends_with_underscore(str); 
}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));
