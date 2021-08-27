// strings available to return
// these strings can be concatenated
const FIZZ = "Fizz";
const BUZZ = "Buzz";

const NUMBER_RULE_FIZZ = 3;
const NUMBER_RULE_BUZZ = 5;

const intsArray = [68, 213, 253, -90];

function buildStringArray(ints) {
  const strings = [];
  ints.forEach((number) => {
    validations(number);
    let string = returnString(number);
    if (string) {
      strings.push(string);
    }
  });
  return strings;
}

// validation for number type
function validations(number) {
  if (typeof number !== "number" || !Number.isInteger(number)) {
    throw TypeError("Only numbers value are allowed");
  }
}

// apply rules for return a available string
function returnString(number) {

  // convert the number to an array with its digits
  digitsNumber = numDigits(number);

  // looking for if exist number rule a
  const isThree = digitsNumber.indexOf(NUMBER_RULE_FIZZ);
  if (isThree !== -1) {
    // if exist return text FIZZ
    return FIZZ;
  }

  // looking for if exist number rule a
  const isFive = digitsNumber.indexOf(NUMBER_RULE_BUZZ);
  if (isFive !== -1) {
    // if exist return text BUZZ
    return BUZZ;
  }

  // validation for divisibles number
  const isDivisibleRes = isDivisible(number);

  if (isDivisibleRes.status === true) {
    // if is divisible return the response text
    return isDivisibleRes.stringToReturn;
  }
}

// convert a number to an array with its digits
function numDigits(number) {
  return [...`${number}`].map((digit) => parseInt(digit));
}

function isDivisible(number) {
  let response = {
    status: false,
    stringToReturn: "",
  };

  // looking for if the number is divisible by some number rule
  const isFizz = Number.isInteger(number / NUMBER_RULE_FIZZ);
  const isBuzz = Number.isInteger(number / NUMBER_RULE_BUZZ);

  if (isFizz) {
    // if is divisible by FIZZ concatenate the string to return with FIZZ
    // change the status to true
    response.status = true;
    response.stringToReturn += FIZZ;
  }

  if (isBuzz) {
    // if is divisible by BUZZ concatenate the string to return with BUZZ
    // change the status to true
    response.status = true;
    response.stringToReturn += BUZZ;
  }

  return response;
}

// print strings in an array
console.log(buildStringArray(intsArray));
