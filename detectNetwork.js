// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
// Note: `cardNumber` will always be a string
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long

// Once you've read this, go ahead and try to implement this function, then return to the console.
//Visa always has a prefix of 4 and a length of 13, 16, or 19.
//MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
//Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

var detectNetwork = function(cardNumber) {
  let firstTwo = cardNumber.substr(0, 2);
  let firstThree = cardNumber.substr(0, 3);
  let firstFour = cardNumber.substr(0, 4);
  let firstSix = cardNumber.substr(0, 6);

  if ((firstTwo === "38" || firstTwo === "39") && cardNumber.length === 14) {
    return "Diner's Club";
  } else if (
    (firstTwo === "34" || firstTwo === "37") &&
    cardNumber.length === 15
  ) {
    return "American Express";
  } else if (
    firstFour !== "4903" &&
    firstFour !== "4905" &&
    firstFour !== "4911" &&
    firstFour !== "4936" &&
    cardNumber[0] === "4" &&
    (cardNumber.length === 13 ||
      cardNumber.length === 16 ||
      cardNumber.length === 19)
  ) {
    return "Visa";
  } else if (
    (firstTwo === "51" ||
      firstTwo === "52" ||
      firstTwo === "53" ||
      firstTwo === "54" ||
      firstTwo === "55") &&
    cardNumber.length === 16
  ) {
    return "MasterCard";
  } else if (
    (firstFour === "5018" ||
      firstFour === "5020" ||
      firstFour === "5038" ||
      firstFour === "6304") &&
    (cardNumber.length >= 12 && cardNumber.length <= 19)
  ) {
    return "Maestro";
  } else if (
    (firstTwo === "65" ||
      firstFour === "6011" ||
      firstThree === "644" ||
      firstThree === "645" ||
      firstThree === "646" ||
      firstThree === "647" ||
      firstThree === "648" ||
      firstThree === "649") &&
    (cardNumber.length === 16 || cardNumber.length === 19)
  ) {
    return "Discover";
  } else if (
    (+firstSix >= 622126 && +firstSix <= 622925) ||
    (firstThree === "624" || firstThree === "625" || firstThree === "626") ||
    ((firstFour === "6282" ||
      firstFour === "6283" ||
      firstFour === "6284" ||
      firstFour === "6285" ||
      firstFour === "6286" ||
      firstFour === "6287" ||
      firstFour === "6288") &&
      (cardNumber.length >= 16 || cardNumber.length <= 19))
  ) {
    return "China UnionPay";
  } else if (
    firstFour === "4903" ||
    firstFour === "4905" ||
    firstFour === "4911" ||
    firstFour === "4936" ||
    firstFour === "6333" ||
    firstFour === "6759" ||
    ((firstSix === "564182" || firstSix === "633110") &&
      (cardNumber.length === 16 ||
        cardNumber.length === 18 ||
        cardNumber.length === 19))
  ) {
    return "Switch";
  }
};
