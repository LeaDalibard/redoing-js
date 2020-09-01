/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    run.onclick = function () {
        var array = [];
        for (let i = 1; i <= 10; i++) {
            array.push(Math.floor(Math.random() * 100)+1)
            document.getElementById("n-" + i).innerHTML = array[i - 1];
        }
        document.getElementById("min").innerHTML = Math.min(...array);
        document.getElementById("max").innerHTML = Math.max(...array);
        document.getElementById("sum").innerHTML =array.reduce((a,b)=>a+b, 0);
        document.getElementById("average").innerHTML =array.reduce((a,b)=>a+b, 0)/array.length;
    }
})();
