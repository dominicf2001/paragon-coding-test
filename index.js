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

function getHappinessScore(dateInput, holidayDate) {
    const msPerDay = 1000 * 60 * 60 * 24;
    const diffInDays = Math.floor((holidayDate - dateInput) / msPerDay);

    if (diffInDays >= 0 && diffInDays <= 30) {
        return 10;
    } else if (diffInDays >= 31 && diffInDays <= 60) {
        return 5;
    } else if (diffInDays >= 61 && diffInDays <= 90) {
        return 1;
    } else {
        return 0;
    }
}

function getTotalHappinessScore(dateInput, holidays) {
    let totalHappinessScore = 0;

    holidays.forEach((holiday) => {
        totalHappinessScore += getHappinessScore(dateInput, holiday.date);
    });

    return totalHappinessScore;
}

function getClosestHolidayAndHappinessScore(dateInput) {
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
const outputHappinessScore = document.querySelector("#output-happiness-score");

dateInputSubmitBtn.addEventListener("click", ()=> {
    const dateInput = document.querySelector("#date-input").value;
    const dateInputObj = new Date(dateInput);
    const closestHolidayObj = getClosestHolidayAndHappinessScore(dateInputObj);
    outputHolidayName.textContent = closestHolidayObj[0].name;
    outputHolidayDate.textContent = closestHolidayObj[0].date;
    outputHappinessScore.textContent = closestHolidayObj[1];
});
