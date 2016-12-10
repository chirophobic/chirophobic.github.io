/**
 * Created by bohda on 10/12/2016.
 */

window.onload = function () {
    reset();

    document.querySelector("#reset").addEventListener("click", reset);
    document.querySelector("#clear").addEventListener("click", clear);
    document.querySelector("#submit").addEventListener("click", reset);
};

function clear() {
    var input = document.querySelectorAll("table input");
    input.forEach(function (elem) {
        elem.value = "";
    });
}

function reset() {
    clearBoard();
    var board = generateBoard();
    var html = "<table><tbody>" + board + "</tbody></table>";
    var output = document.querySelector("#multiplication-table");
    output.innerHTML = html;
}

/**
 * Generates a board. Make sure to clear it first
 */
function generateBoard() {
    var rows = shuffle(list(1, 13));
    var columns = shuffle(list(1, 13));
    var board = "";

    var wrap = function (value) {
        return "<td>" + value.toString() + "</td>";
    };

    board += "<tr><td></td>" + rows.map(wrap).join("") + "</tr>";

    board += columns.map(function (number) {
        var inputs = "";
        for (var i = 1; i <= 12; i++) {
            inputs += wrap("<input />");
        }

        return "<tr>" + wrap(number) + inputs + "</tr>"
    }).join("");

    return board;
}

/**
 * Clears the board
 */
function clearBoard() {
    document.querySelector("#multiplication-table").innerHTML = "";
}

/**
 * Shuffle an array and return the result. This does not change the input array
 * @param {Array} array
 *  The array to shuffle
 * @returns {Array}
 *  The shuffled array
 */
function shuffle(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

/**
 * Create a list with all the numbers between min (inclusive) and max (exclusive)
 * @param {int} min
 * @param {int} max
 * @returns {Array}
 */
function list(min, max) {
    var numbers = [];
    for (var i = min; i < max; i++) {
        numbers.push(i);
    }
    return numbers;
}
