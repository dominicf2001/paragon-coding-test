// HOLIDAY LIST
const companyHolidays = [
  { name: "Washington's Birthday", date: new Date('2023-02-20') },
  { name: "Good Friday", date: new Date('2023-04-07') },
  { name: "Memorial Day", date: new Date('2023-05-29') },
  { name: "Juneteenth (observed)", date: new Date('2023-06-19') },
  { name: "Independence Day", date: new Date('2023-07-04') },
  { name: "Labor Day", date: new Date('2023-09-04') },
  { name: "Columbus Day", date: new Date('2023-10-09') },
  { name: "Thanksgiving Break", date: new Date('2023-11-23') },
  { name: "Holiday Break", date: new Date('2023-12-25') }
];

// HELPER FUNCTIONS
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

function getLowestAndHighestHappinessScores() {
    const yearStartdate = new Date('2023-01-01');
    const yearEndDate = new Date('2023-12-31');
    let highestHappinessScore = getTotalHappinessScore(yearStartdate);
    let highestHappinessDate = yearStartdate;
    let lowestHappinessScore = getTotalHappinessScore(yearEndDate);
    let lowestHappinessDate = yearStartdate;

    for (let currentDate = yearStartdate; currentDate < yearEndDate; currentDate.setDate(currentDate.getDate() + 1)) {
        const currentHappinessScore = getTotalHappinessScore(currentDate);
        if (currentHappinessScore < lowestHappinessScore) {
            lowestHappinessDate = new Date(currentDate);
            lowestHappinessScore = currentHappinessScore;
        }
        if (currentHappinessScore > highestHappinessScore) {
            highestHappinessDate = new Date(currentDate);
            highestHappinessScore = currentHappinessScore;
        }
    }

    return {
        highestHappinessScore,
        highestHappinessDate,
        lowestHappinessScore,
        lowestHappinessDate,
    };
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

function formatDate(date) {
    return date.toLocaleString('default', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

// DOM MANIPULATION
const dateInputSubmitBtn = document.querySelector("#date-input-submit-btn");
const outputHolidayDate = document.querySelector("#output-holiday-date");
const outputHolidayName = document.querySelector("#output-holiday-name");
const outputHappinessScore = document.querySelector("#output-happiness-score");
const outputHighestHappinessDate = document.querySelector("#output-highest-happiness-date");
const outputHighestHappinessScore = document.querySelector("#output-highest-happiness-score");
const outputLowestHappinessScore = document.querySelector("#output-lowest-happiness-score");
const outputLowestHappinessDate = document.querySelector("#output-lowest-happiness-date");

dateInputSubmitBtn.addEventListener("click", ()=> {
    const dateInput = document.querySelector("#date-input").value;
    const dateInputObj = new Date(dateInput);
    const closestHolidayObj = getClosestHoliday(dateInputObj);
    outputHolidayName.textContent = closestHolidayObj.name;
    outputHolidayDate.textContent = formatDate(closestHolidayObj.date);
    outputHappinessScore.textContent = getTotalHappinessScore(dateInputObj);
});

const highestAndLowestScoresAndDates = getLowestAndHighestHappinessScores();
outputHighestHappinessDate.textContent = highestAndLowestScoresAndDates["highestHappinessDate"];
outputHighestHappinessScore.textContent = highestAndLowestScoresAndDates["highestHappinessScore"];
outputLowestHappinessDate.textContent = highestAndLowestScoresAndDates["lowestHappinessDate"];
outputLowestHappinessScore.textContent = highestAndLowestScoresAndDates["lowestHappinessScore"];

// UNIT TESTS
{
    // Before first holiday
    const dateInput = new Date('2023-03-15');
    const expectedResult = { name: "Washington's Birthday", date: new Date('2023-02-20') }
    const closestHoliday = getClosestHoliday(dateInput, companyHolidays);

    console.log(`${dateInput}: \nEXPECTED: ${expectedResult.name}, ${formatDate(expectedResult.date)} \nRESULT: ${closestHoliday.name}, ${formatDate(closestHoliday.date)}`);
    if (closestHoliday.name === expectedResult.name &&
        closestHoliday.date.getTime() === expectedResult.date.getTime()) {
        console.log('Test passed');
    } else {
        console.error('Test failed');
    }
}

{
    // After last holidy
    const dateInput = new Date('2023-12-31');
    const expectedResult = { name: "Holiday Break", date: new Date('2023-12-25') }
    const closestHoliday = getClosestHoliday(dateInput);

    console.log(`${dateInput}: \nEXPECTED: ${expectedResult.name}, ${formatDate(expectedResult.date)} \nRESULT: ${closestHoliday.name}, ${formatDate(closestHoliday.date)}`);
    if (closestHoliday.name === expectedResult.name &&
        closestHoliday.date.getTime() === expectedResult.date.getTime()) {
        console.log('Test passed');
    } else {
        console.error('Test failed');
    }
}
