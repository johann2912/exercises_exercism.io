//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  let brackets = [];
  let map = {
      "[":"]",
      "{":"}",
      "(":")",  
  }

  for (let i = 0; i < input.length; i++) {
      let complete = input[i]
      if (complete == '[' || complete == '{' || complete == '(' ) {
          brackets.push(complete);
      }
      else if (complete == ']' || complete == '}' || complete == ')') {
          let other = brackets.pop();
          if (complete != map[other]) {
              return false
          }
      }
  }
  return brackets.length == 0
}
