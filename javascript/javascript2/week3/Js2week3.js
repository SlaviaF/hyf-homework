setTimeout(function () { console.log(`Called after 2.5 seconds`) }, 2500)

//STRING TO lOG AFTER DELAY
function stringToLogAfterDelay(delay, stringToLog) {
    setTimeout(function () { console.log(stringToLog) }, delay * 1000);

}
stringToLogAfterDelay(5, "This string logged after 5 secs");
stringToLogAfterDelay(3, "This string logged after 3 secs");

//BUTTON
const btn = document.getElementById("delayBtn");
btn.addEventListener('click', callback);
function callback() {
    stringToLogAfterDelay(5, "This string logged after 5 secs")
}

//PLANET LOG FUNCTION

/**************** */
/*function getEarth() { console.log(`Earth`) }
function getSaturn() { console.log(`Saturn`) }
const earth = getEarth();
const saturn = getSaturn();
const planetLogFunction = (callback) => callback;
planetLogFunction(earth);
planetLogFunction(saturn);*/

const earth = function () {
    console.log("Earth")
};
const saturn = function () {
    console.log("Saturn")
}
const planetLogFunction = (callback) => callback;
planetLogFunction(earth());
planetLogFunction(saturn());

//GEOLOCATION
const btnLct = document.getElementById("location");
const lctPara = document.getElementById("locationPara")
btnLct.addEventListener('click', getLocation);
function getLocation() {
    function onSuccess(position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        lctPara.innerHTML = "This is the Latitude: " + lat +
            "<br>This is the Longitude: " + lng;
        displayMap(lat, lng)
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess);
        console.log(navigator.geolocation)
    } else {
        lct.innerHTML = "Geolocation is not supported by this browser."
    }
}

let map;
function displayMap(lat, lng) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat, lng },
        zoom: 8,
    });
}


//RUN AFTER DELAY
function runAfterDelay(delay, callback) {
    setTimeout(function () { callback() }, delay * 1000);

}
runAfterDelay(4, function () {
    console.log('Should be logged after 4 seconds')
})

//DOULE CLICK DETECTOR
document.addEventListener('dblclick', () => {
    console.log('DoubleClick!!!!')
})

//JOKE CREATOR

const jokeCreator = (shouldTellFunnyJoke = true, logFunnyJoke, logBadJoke) => {
    if (shouldTellFunnyJoke === true) {
        logFunnyJoke();
    }
    else {
        logBadJoke();
    }

    function logFunnyJoke() {
        console.log(`Which is the animal you should never play games with : A Cheetah`)
    }
    function logBadJoke() {
        console.log(`How does the pengiun biult their house: Igloos it together`)
    }
}
jokeCreator();

