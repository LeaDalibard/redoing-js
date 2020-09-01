/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var x=document.createElement("Table");
    document.getElementById("target").appendChild(x);
    for(let i=1; i<11; i++){
       var tr=document.createElement("tr");
       x.appendChild(tr);
       var td=document.createElement("td");
       tr.appendChild(td);
    }
})();
