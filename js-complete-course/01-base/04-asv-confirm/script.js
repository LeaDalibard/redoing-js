/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var age = prompt("What is your age?");
    var name = prompt("What is your name");
    var v=confirm("your name is " + name+ ". And you are " + age +".");
    if (v == true) {
        alert ("You pressed OK!");
    } else {
        alert ("You pressed Cancel!");
    }

})();
