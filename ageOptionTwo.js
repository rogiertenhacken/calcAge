//werkt nog niet, geeft een NaN als birthYear...

var calcAge = function (birthYear, birthMonth, dateDay ) {
// get current year
  var today = new Date();
  var thisYear = today.getFullYear();
  console.log(thisYear);

// declares var for later
  var zYear = thisYear - birthYear;
  var xYear2 = thisYear - birthYear -1;
  console.log(year + ' is var year line 5 \n');

//get current day
    var dayofMonth = new Date();
    var thisDay = dayofMonth.getDate();
    console.log(thisDay + " today's date \n");

//get current month:
  var x = new Date();
  var z = x.getMonth();
  var y = z + 1; // js is 0-based / January = 0
  console.log(y + ' var y');

// get birth year from site
  var birthYear = document.getElementById("year");
  console.log(birthYear);

//get birth month from site
  var birthMonth = document.getElementById("month");
  console.log(birthMonth);

// get birth day from site
  var dateDay = document.getElementById("day");
  console.log(dateDay);

   if (thisDay < dateDay && y <= birthMonth) {
    alert (xYear2 + ' bday is later this year \n');
  } else {
    alert (zYear + ' is your age');
  }
};







// deze versie werkt zonder de getElementByID

var calcAge = function (birthYear) {
  var today = new Date();
  var thisYear = today.getFullYear();
  var year = thisYear - birthYear;
  var year2 = thisYear - birthYear -1;
  console.log(year + ' is var year line 5 \n');
  // this section is for later
  // get month:
  /*var x = new Date();
  var z = x.getMonth();
  var y = z + 1;
  console.log(y + ' line 10 var y');*/
  var thisMonth = 12;
  var birthMonth = 12; //getElementById later
  var dayofMonth = new Date();
var thisDay = dayofMonth.getDate();
console.log(thisDay + " today's date \n");
var dateDay = 21; //getElementById later
console.log(dateDay + ' is a fictional day of the month when born \n');

   if (thisDay < dateDay && thisMonth <= birthMonth) {
    console.log(year2 + ' bday is later this year \n');
  } else {
    console.log(year + ' is your age');
  } 
};

console.log(calcAge(1990));


// er is ook nog de andere code in het andere .js bestand :)

