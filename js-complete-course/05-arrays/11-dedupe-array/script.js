/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    run.onclick = function () {
        //var unique = fruits.filter((a, b) => fruits.indexOf(a) === b);
        //let unique= [...new Set(fruits)];
        let unique = {};
        function remove(fruits) {
            fruits.forEach(function (i) {
                if (!unique[i]) {
                    unique[i] = true;
                }
            });
        }
        remove(fruits);
        console.log(Object.keys(unique));
    }
})();
