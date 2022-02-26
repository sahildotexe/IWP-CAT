// Write a JavaScript that calculates the squares and cubes of the numbers from 0 to 10 and
// outputs HTML text that displays the resulting values in an HTML table format.
var a = prompt("Enter range");
var min = parseInt(a.split("-")[0]);
var max = parseInt(a.split("-")[1]);

//Display number, square and cube of number in table
if (max < 10) {
  for (var i = min; i <= max; i++) {
    var table = document.getElementById("res");
    table.innerHTML +=
      "<tr><td>" +
      i +
      "</td><td>" +
      i * i +
      "</td><td>" +
      i * i * i +
      "</td></tr>";
  }
} else {
  alert("Range should be less than 10");
}
