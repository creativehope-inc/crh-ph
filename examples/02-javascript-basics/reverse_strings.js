function reverse(string) {
  let reversed = '';

  for(k = 0; k < string.length; k++) {
    reversed = string[k] + reversed;
  }

  return reversed;
}

function unshiftArray(reversedArray) {
  let reversed = [];

  for(l = 0; l < reversedArray.length; l++) {
    reversed.unshift(reversedArray[l]);
  }

  return reversed;
}

function reverseArray(array) {
  let reversedArray = [];
  
  for(x = 0; x < array.length; x++) {
    reversedArray.push(reverse(array[x]));
  }

  return unshiftArray(reversedArray);
}

console.log(reverseArray(['hello', 'world']).toString() == ['dlrow', 'olleh'].toString())
console.log(reverseArray(['hello', 'world', 'expresso']).toString() == ['osserpxe', 'dlrow', 'olleh'].toString())
