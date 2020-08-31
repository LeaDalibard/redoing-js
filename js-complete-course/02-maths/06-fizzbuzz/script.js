/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var number = prompt("Please write a number");
    if (number % 5 == 0 && number % 3 == 0) {
        console.log("Fizzbuzz")
    }
    else if (number % 5 == 0 && number % 3 != 0)
    {
        console.log("Fizz")
    }
    else if (number % 5 != 0 && number % 3 == 0)
    {
        console.log("Buzz")
    }
    else
    {
        console.log(number)
    }

})();
