// het werkt!! (alleen op mobile devices is het erg klein...)

/* extra still to do : als je niks invult ben je 2017 jaar op aarde, automatisch naar volgende veld,
jaren en aantal maanden weergeven */

const calcAge = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // month is 0-based / January == 0
  const currentDay = today.getDate();

  const yearOfBirth = document.getElementById("year").value;
  const monthOfBirth = document.getElementById("month").value;
  const dayOfBirth = document.getElementById("day").value;

  const yearsSinceBirth = currentYear - yearOfBirth;
  const monthsSinceBirth = currentMonth - monthOfBirth;
  const daysSinceBirth =  currentDay - dayOfBirth;

  document.getElementById("output").innerHTML = `ON EARTH FOR \
  ${yearsSinceBirth} YEARS, ${monthsSinceBirth} MONTHS, ${daysSinceBirth} \
  DAYS`;
};
