/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    run.onclick = function (){
        var year = document.getElementById("year").value;
        var month = [];
        var months=["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        for (m = 0; m < 13; m++) {
            var d = new Date(year,m, 13);
            if (d.getDay() == 5) {
                month.push(months[m])
            }
        }
        alert(month);
    }

})();
