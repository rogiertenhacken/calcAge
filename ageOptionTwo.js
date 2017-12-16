// het werkt!! (alleen op mobile devices is het erg klein...) 

/* extra still to do : als je niks invult ben je 2017 jaar op aarde, automatisch naar volgende veld, 
jaren en aantal maanden weergeven */

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

// get birth day date from site
  var dayOfBirth = document.getElementById("day").value;
  console.log(dayOfBirth);

// var to use
    var zYear = thisYear - yearOfBirth;
    var xYear2 = zYear - 1;
    console.log(zYear + ' is var zYear line 5 \n');
    console.log(xYear2 + " var xYear2");

   if (thisDay < dayOfBirth && currentMonth <= monthOfBirth) {
     document.getElementById("output").innerHTML = 'ON EARTH FOR ' + xYear2 + ' YEARS';
  } else {
    document.getElementById("output").innerHTML = 'ON EARTH FOR ' + zYear + ' YEARS';
  }
};
