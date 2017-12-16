// het werkt!! (alleen nog een alert vervanging zoeken, dat werkt niet op een mobile-device)

var calcAge = function () {
// get current year
  var today = new Date();
  var thisYear = today.getFullYear();
  console.log(thisYear);

//get current month:
    var x = new Date();
    var z = x.getMonth();
    var currentMonth = z + 1; // js is 0-based / January = 0
    console.log(currentMonth + ' var y this month');

//get current day
    var dayofMonth = new Date();
    var thisDay = dayofMonth.getDate();
    console.log(thisDay + " today's date \n");

// get year of birth from site
  var yearOfBirth = document.getElementById("year").value;
  console.log(yearOfBirth);

//get birth month from site
  var monthOfBirth =  document.getElementById("month").value;
    console.log(monthOfBirth);

// get birth day from site
  var dayOfBirth = document.getElementById("day").value;
  console.log(dayOfBirth);

// declares var for later
    var zYear = thisYear - yearOfBirth;
    var xYear2 = zYear - 1;
    console.log(zYear + ' is var zYear line 5 \n');
    console.log(xYear2 + " var xYear2");

   if (thisDay < dayOfBirth && currentMonth <= monthOfBirth) {
    alert ('ON EARTH FOR ' + xYear2 + ' YEARS');
  } else {
    alert ('ON EARTH FOR ' + zYear + ' YEARS');
  }
};
