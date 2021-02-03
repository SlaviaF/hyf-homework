//CactusIO-interactive (Smart phone usage app) 
const activities = [];


function addActivity(date, activity, duration) {

    activities.push({ date: date, activity: activity, duration: duration })

}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 40);
addActivity("23/7-18", "Netflix", 120);
addActivity("23/7-18", "Slack", 200);
addActivity("23/7-18", "dr.dk", 60);






console.log(activities);


function showStatus(value) {
    let totalDuration = 0;
    if (value.length < 1) {
        console.log("Add some activities before calling showStatus")
    }

    for (i = 0; i < value.length; i++) {
        totalDuration = totalDuration + value[i].duration;

    }
    if (totalDuration > 400) {
        console.log("You have reached your limit, no more smartphoning for you!");
    }
    console.log('You have added ' + value.length + ' activities. They amount to ' + totalDuration + ' min of usage')
}
showStatus(activities);



