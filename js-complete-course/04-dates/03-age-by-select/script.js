/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    run.onclick = function () {
        var bDay = document.getElementById("dob-day").value;
        var bMonth = document.getElementById("dob-month").value;
        var bYear = document.getElementById("dob-year").value;
        var date = new Date;
        var month = date.getMonth();
        var year = date.getFullYear();
        var day = date.getDay();
        var age = year - bYear;
        if ((month+ 1 < bMonth ) || (month - bMonth + 1 === 0 && bDay>day)) {
            var age = age - 1
        }
        alert('You are ' + age + ' years-old.');
    }
   // month < 0 || (month === 0 && today.getDate() < day

})();
