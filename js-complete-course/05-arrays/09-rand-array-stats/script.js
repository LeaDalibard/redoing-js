/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    run.onclick = function () {
        for(let i = 1;i <= 10;i++) {
            document.getElementById("n-" + i).innerHTML = Math.floor(Math.random() * 11);
        }
    }
})();
