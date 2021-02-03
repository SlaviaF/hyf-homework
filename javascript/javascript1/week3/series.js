const seriesDurations = [
    {
        title: "Friends",
        days: 4,
        hours: 2,
        minutes: 20,
    },
    {
        title: "How I Met Your Mother ",
        days: 7,
        hours: 6,
        minutes: 36,

    },
    {
        title: "The Big Bang Theory",
        days: 11,
        hours: 12,
        minutes: 32,

    },

];



const secondsToMinutes = 0;
const minutesToDays = 0;
const daysToYears = 0;


function timeSpendOnSeries(seriesArr) {
    let totalDays = 0;
    let hoursInDays = 0;
    let minutesInDays = 0;
    let total = 0;
    let calculateTotalInDays = 0;
    let daysInYears = 0;
    let totalIndays = 0;
    let totalPercent = 0;



    for (i = 0; i < seriesArr.length; i++) {


        totalDays = seriesArr[i].days;
        hoursInDays = seriesArr[i].hours * 0.0416666667;
        minutesInDays = seriesArr[i].minutes * 0.000694444444;
        totalInDays = 0;

        calculateTotalInDays = totalDays + hoursInDays + minutesInDays;
        daysInYears = calculateTotalInDays * 0.00273790926;
        percentage = (100 * daysInYears) / 80;
        percentageUpto3decimals = percentage.toFixed(3);
        percentage;
        console.log(seriesArr[i].title + ' took ' + percentageUpto3decimals + ' percentage of my life ')


        totalInDays = totalInDays + (seriesArr[i].days) + (seriesArr[i].hours * 0.0416666667) + (seriesArr[i].minutes * 0.000694444444);
        total = percentage + total;
        totalPercent = total.toFixed(3);
    }
    console.log('In all it took ' + totalPercent + ' percentage of my life');
}

timeSpendOnSeries(seriesDurations);
