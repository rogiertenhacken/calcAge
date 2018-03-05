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
 }else if (monthOfBirth <= currentMonth){
   document.getElementById("output").innerHTML = 'ON EARTH FOR ' + yearsSinceBirth + ' YEARS';
} else {
   document.getElementById("output").innerHTML = 'ON EARTH FOR ' + yearsSinceBirth2 + ' YEARS';
 }
 };
