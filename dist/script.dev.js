"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 1. Write a function that takes a number and returns true if it is a positive number and false is it is a negative number.
function isNumberPositive(number) {
  if (number < 0) {
    console.log("false");
  } else if (number > 0) {
    console.log("true");
  } else if (number == 0) {
    console.log("neither");
  } else {}
} // 2. Write a function that takes a number of days and converts it into an age.


function convertDaysToAge(numberOfDays) {
  var ageReport = 'you are ' + numberOfDays / 365 + ' years old.';
  console.log(ageReport);
} // 3. Write a function that takes three numbers and returns the largest of the three numbers.


function getLargestNumber(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else if (c > a && c > b) {
    console.log(c);
  }
} // 4. Write a function that takes an array of names and returns the last name from the array of names.


function getLastName(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      a = _ref2[0],
      b = _ref2[1],
      c = _ref2[2];

  var lastName = [a, b, c].pop();
  console.log(lastName);
} // 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.


function allNumbersPositive(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 3),
      a = _ref4[0],
      b = _ref4[1],
      c = _ref4[2];

  if (a > 0 && b > 0 && c > 0) {
    console.log("true");
  } else {
    console.log(false);
  }
}