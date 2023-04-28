const companyHolidays = [
  {
    date: new Date('2023-02-20'),
    name: "Washington's Birthday"
  },
  {
    date: new Date('2023-04-07'),
    name: "Good Friday"
  },
  {
    date: new Date('2023-05-29'),
    name: "Memorial Day"
  },
  {
    date: new Date('2023-06-19'),
    name: "Juneteenth (observed)"
  },
  {
    date: new Date('2023-07-04'),
    name: "Independence Day"
  },
  {
    date: new Date('2023-09-04'),
    name: "Labor Day"
  },
  {
    date: new Date('2023-10-09'),
    name: "Columbus Day"
  },
  {
    date: new Date('2023-11-23'),
    name: "Thanksgiving Day"
  },
  {
    date: new Date('2023-11-24'),
    name: "Day after Thanksgiving"
  },
  {
    date: new Date('2023-12-25'),
    name: "Christmas Day"
  },
  {
    date: new Date('2023-12-26'),
    name: "Holiday Break (Day 2)"
  },
  {
    date: new Date('2023-12-27'),
    name: "Holiday Break (Day 3)"
  },
  {
    date: new Date('2023-12-28'),
    name: "Holiday Break (Day 4)"
  },
  {
    date: new Date('2023-12-29'),
    name: "Holiday Break (Day 5)"
  }
];

function calculateClosestHoliday(date) {
    const closestHoliday = companyHolidays.reduce((closest, currentDate) => {

    }, companyHolidays[0]);
}

const dateInputSubmitBtn = document.querySelector("#date-input-submit-btn");
const outputHolidayDate = document.querySelector("#output-holiday-date");
const outputHolidayName = document.querySelector("#output-holiday-name");

dateInputSubmitBtn.addEventListener("click", ()=> {
    const dateInput = document.querySelector("#date-input").value;
    console.log(dateInput);
});
