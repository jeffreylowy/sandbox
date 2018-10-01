function returnEmpty() {
  return "";
}

function encode(input) {
  if (!input || input.length === 0) {
    return returnEmpty();
  }
  let str = "";
  let count = 0;
  let previousLetter = "";

  for (let i = 0; i < input.length; i++) {
    // If the first letter, update the string and set previousLetter.
    if (i === 0) {
      str += input[i];
      previousLetter = input[i];
    }

    // Increment count if the current letter equals the previous letter
    if (input[i] === previousLetter) {
      count++;
    }

    if (input[i] !== previousLetter && count > 1) {
      str = count + str + input[i];
    } else {
      str = str + input[i];
    }
  }

  return str;
}

console.log(encode("XXYZ"));

// function decode() {}

// export { encode, decode };
