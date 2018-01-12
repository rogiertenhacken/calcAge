const calcAge = () => {

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const yearOfBirth = document.getElementById("year").value;
  const monthOfBirth =  document.getElementById("month").value;
  const dayOfBirth = document.getElementById("day").value;

  const yearsSinceBirth = currentYear - yearOfBirth;
  const yearsSinceBirth2 = yearsSinceBirth - 1;
  const monthsSinceBirth = currentMonth - monthOfBirth;
  const daysSinceBirth =  dayOfBirth - currentDay;

  if (currentDay < dayOfBirth && currentMonth <= monthOfBirth) {
    document.getElementById("output").innerHTML = 'ON EARTH FOR ' + yearsSinceBirth2 + ' YEARS ';
 } else if (monthsSinceBirth === 0){
   document.getElementById("output").innerHTML = 'ON EARTH FOR ' + yearsSinceBirth + ' YEARS';
 } else {
   document.getElementById("output").innerHTML = 'ON EARTH FOR ' + yearsSinceBirth2 + ' YEARS';
 }
 };

// maybe a new output field (using #outputTwo in the html-file) with remaining months to birthday. using the Math.abs or var posNum = (num < 0) ? num * -1 : num; // if num is negative multiple by negative (https://stackoverflow.com/questions/4652104/convert-a-negative-number-to-a-positive-one-in-javascript)

// if the new outfield works, also try and use with the code below:

/* if (currentDay < dayOfBirth && currentMonth <= monthOfBirth) {
   document.getElementById("output").innerHTML = 'ON EARTH FOR ' + yearsSinceBirth2 + ' YEARS ' + ' (and you have ' +  monthsSinceBirth + ' months ' + ' and ' + daysSinceBirth + ' days' + "<br />" + ' left to your next birthday)';
} else if (monthsSinceBirth === 0){
  document.getElementById("output").innerHTML = 'ON EARTH FOR ' + yearsSinceBirth + ' YEARS ' + ' AND ' + monthsSinceBirth + ' MONTH '; // if only month past not more months
} else {
  document.getElementById("output").innerHTML = 'ON EARTH FOR ' + yearsSinceBirth2 + ' YEARS ' + ' AND ' + monthsSinceBirth + ' MONTHS LEFT TO YOUR NEXT BIRTHDAY ';
}
}; */
