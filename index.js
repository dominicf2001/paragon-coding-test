const companyHolidays = [
  { name: "Washington's Birthday", date: new Date('2023-02-20T00:00:00') },
  { name: "Good Friday", date: new Date('2023-04-07T00:00:00') },
  { name: "Memorial Day", date: new Date('2023-05-29T00:00:00') },
  { name: "Juneteenth (observed)", date: new Date('2023-06-19T00:00:00') },
  { name: "Independence Day", date: new Date('2023-07-04T00:00:00') },
  { name: "Labor Day", date: new Date('2023-09-04T00:00:00') },
  { name: "Columbus Day", date: new Date('2023-10-09T00:00:00') },
  { name: "Thanksgiving Break", date: new Date('2023-11-23T00:00:00') },
  { name: "Holiday Break", date: new Date('2023-12-25T00:00:00') }
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

function getTotalHappinessScore(dateInput) {
    let totalHappinessScore = 0;

    companyHolidays.forEach((holiday) => {
        totalHappinessScore += getHappinessScore(dateInput, holiday.date);
    });

    return totalHappinessScore;
}

function getClosestHoliday(dateInput) {
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
    const closestHolidayObj = getClosestHoliday(dateInputObj);
    outputHolidayName.textContent = closestHolidayObj.name;
    outputHolidayDate.textContent = closestHolidayObj.date;
    outputHappinessScore.textContent = getTotalHappinessScore(dateInputObj);
});
