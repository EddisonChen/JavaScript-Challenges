// 1. Write a function that takes a number and returns true if it is a positive number and false is it is a negative number.

function isNumberPositive (number) {
    if (number < 0) {
        console.log("false")
    }

    else if (number > 0) {
        console.log("true")
    }

    else if (number == 0) {
        console.log("neither")
    }

    else {}
}

// 2. Write a function that takes a number of days and converts it into an age.

function convertDaysToAge (numberOfDays) {
    const ageReport = 'you are ' + numberOfDays/365 + ' years old.'
    console.log(ageReport)
}

// 3. Write a function that takes three numbers and returns the largest of the three numbers.

function getLargestNumber (a,b,c) {
    if (a>b && a>c) {
        console.log(a)
    }
    else if (b>a && b>c) {
        console.log(b)
    }
    else if (c>a && c>b) {
        console.log(c)
    }
}

// 4. Write a function that takes an array of names and returns the last name from the array of names.

function getLastName ([a,b,c]) {
    const lastName = [a,b,c].pop();
    console.log(lastName)
}

getLastName (["billy", "jimmy", "john"]);

// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

function allNumbersPositive ([a,b,c]) {
    if (a>0 && b>0 && c>0) {
        console.log ("true");
    }

    else {
        console.log(false)
    }
}

allNumbersPositive ([2,3,-4])