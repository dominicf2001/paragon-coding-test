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


function calculateClosestHoliday(dateInput) {
    let closestHoliday = companyHolidays[0];

    closestHoliday = companyHolidays.reduce((currentClosestHoliday, currentHoliday) => {
        const currentDifference = Math.abs(dateInput - currentHoliday.date);
        const smallestDifference = Math.abs(dateInput - currentClosestHoliday.date);

        return currentDifference < smallestDifference
            ? currentHoliday
            : currentClosestHoliday;
    }, closestHoliday);

    return closestHoliday;
}


const dateInputSubmitBtn = document.querySelector("#date-input-submit-btn");
const outputHolidayDate = document.querySelector("#output-holiday-date");
const outputHolidayName = document.querySelector("#output-holiday-name");

dateInputSubmitBtn.addEventListener("click", ()=> {
    const dateInput = document.querySelector("#date-input").value;
    const dateInputObj = new Date(dateInput);
    console.log(dateInputObj);
    console.log(calculateClosestHoliday(dateInputObj));
});
