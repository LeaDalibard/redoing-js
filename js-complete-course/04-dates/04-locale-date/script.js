/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var date= new Date;
    var day=date.getDay();
    var daten=date.getDate()
    var month=date.getMonth();
    var months=["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    var m=months[month];
    var days=["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    var d=days[day-1]
    var year=date.getFullYear();
    var h=date.getHours();
    var min=date.getMinutes();
    target.innerHTML=d+' '+daten+' '+m+' '+year+', '+h+'h'+min+'.'

})();
