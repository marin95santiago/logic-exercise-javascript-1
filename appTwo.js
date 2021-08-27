// strings available to return
// these strings can be concatenated
const FIZZ = "Fizz";
const BUZZ = "Buzz";

const NUMBER_RULE_FIZZ = 3;
const NUMBER_RULE_BUZZ = 5;

const intsArray = [3, 5, 90, 15];

function buildStringArray(ints) {
  let strings = [];
  ints.forEach((number) => {
    validations(number);
    let newStrings = returnStringArray(number);
    // update strings state
    strings = [...strings, ...newStrings];
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
function returnStringArray(number) {
  let stringsToReturn = [];
  let returnFizz = false;
  let returnBuzz = false;
  // convert the number to an array with its digits
  digitsNumber = numDigits(number);

  // looking for if exist number rule a
  const isThree = digitsNumber.indexOf(NUMBER_RULE_FIZZ);
  if (isThree !== -1) {
    // if exist returnFizz state is true
    returnFizz = true;
  }

  // looking for if exist number rule a
  const isFive = digitsNumber.indexOf(NUMBER_RULE_BUZZ);
  if (isFive !== -1) {
    // if exist returnBuzz state is true
    returnBuzz = true;
  }

  // validation for divisibles number
  const isDivisibleRes = isDivisible(number, returnFizz, returnBuzz);

  if (isDivisibleRes.status === true) {
    // if is divisible update the stringsToReturn state
    stringsToReturn = isDivisibleRes.stringsToReturn;
  }

  return stringsToReturn;
}

// convert a number to an array with its digits
function numDigits(number) {
  return [...`${number}`].map((digit) => parseInt(digit));
}

function isDivisible(number, returnFizz, returnBuzz) {
  let response = {
    status: false,
    stringsToReturn: [],
  };

  // looking for if the number is divisible by some number rule
  const isFizz = Number.isInteger(number / NUMBER_RULE_FIZZ);
  const isBuzz = Number.isInteger(number / NUMBER_RULE_BUZZ);

  if (isFizz || returnFizz) {
    // if is divisible by FIZZ or returnFizz is true, push the string to stringsToReturn
    // change the status to true
    response.status = true;
    response.stringsToReturn.push(FIZZ);
  }

  if (isBuzz || returnBuzz) {
    // if is divisible by BUZZ or returnBuzz is true, push the string to stringsToReturn
    // change the status to true
    response.status = true;
    response.stringsToReturn.push(BUZZ);
  }

  if (isFizz && isBuzz) {
    response.stringsToReturn.push(FIZZ + BUZZ);
  }

  return response;
}

// print strings in an array
console.log(buildStringArray(intsArray));