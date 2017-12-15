var calcAge = function (birthYear) {
  var today = new Date();
  var thisYear = today.getFullYear();
  var year = thisYear - birthYear;
  var year2 = thisYear - birthYear -1;
  console.log(year + ' is var year line 5 \n');
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
  } else (thisDay >= dateDay && thisMonth >= birthMonth); {
    console.log(year + ' is your age');
  } // kijk hier, klopt de vergelijking wel?

  
};

console.log(calcAge(1990));

// er vindt geen if / else plaats, ze worden allebei weergegeven in de console...
// en er is ook nog de andere code in het andere .js bestand :)
