const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function calculateAge() {
  let todayDate = new Date();
  let inputDate = new Date(document.getElementById("input_date").value);
  // console.log(inputDate);

  let totalMonth, totalDays, totalYears;
  let birthDate = inputDate.getDate();
  let birthMonth = inputDate.getMonth()+1;
  let birthYear = inputDate.getUTCFullYear();

  //Current Data
  let currentYear = todayDate.getFullYear();
  let currentMonth = todayDate.getMonth() + 1;
  let currentDate = todayDate.getDate();

  checkLeapYear(currentYear);

  //validation of date
  if (
    birthYear > currentYear ||
    (birthMonth > currentMonth && birthYear == currentYear) ||
    (birthDate > currentDate &&
      birthMonth == currentMonth &&
      birthYear == currentYear)
  ) {
    alert("Not Born Yet");
    return displayDOB("~", "~", "~");
  }
  totalYears = currentYear - birthYear;
  if (currentMonth >= birthMonth) {
    totalMonth = currentMonth - birthMonth;
  } else {
    totalYears--;
    totalMonth = 12 + currentMonth - birthMonth;
  }
  if (currentDate >= birthDate) {
    totalDays = currentDate - birthDate;
  } else {
    totalMonth--;
    let days = months[currentMonth - 2];
    totalDays = days + currentDate - birthDate;

    if (totalMonth < 0) {
      totalMonth = 12;
      totalYears--;
    }
  }
  displayDOB(totalDays, totalMonth, totalYears);
}

function checkLeapYear(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}

function displayDOB(bDate, bMonth, bYear) {
  document.getElementById("years").textContent = bYear;
  document.getElementById("months").textContent = bMonth;
  document.getElementById("days").textContent = bDate;}
