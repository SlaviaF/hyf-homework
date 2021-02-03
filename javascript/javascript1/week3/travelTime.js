const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
function calculateTravelTime() {

    const travelToTime = travelInformation.destinationDistance / travelInformation.speed;
    return parseInt(travelToTime) + " hours " + Math.round(((travelToTime % 1) * 60)) + " minutes"

}

calculateTravelTime();
const travelTime = calculateTravelTime();
console.log(travelTime);

