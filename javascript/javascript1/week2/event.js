
let dayOfEvent = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let eventDayIndex = 0;
let todayDay = new Date();

todayDay = todayDay.getDay();


function getEventWeekday(num) {
    eventDayIndex = (todayDay + num) % 7;
    return dayOfEvent[eventDayIndex];

}

console.log(getEventWeekday(2));
console.log(todayDay);
