/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var x=document.createElement("Table");
    document.getElementById("target").appendChild(x);

    for (let i=1; i<11; i++) {
        var tr = document.createElement("tr");
        x.appendChild(tr);
        for (let j=1; j<11; j++){
            var td=document.createElement("td");
            var t = document.createTextNode(i+" x "+j+" = "+ i*j);
            td.appendChild(t);
            tr.appendChild(td);
        }
    }

})();
