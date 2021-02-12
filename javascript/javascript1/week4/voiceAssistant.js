const allNames = [];
const name = "";

const todoActivities = [];

function getReply(command) {


    const commandArr = command.split(' ');


    if (allNames.includes(commandArr[4])) {
        greeting = "Hello again " + commandArr[4];

    }

    else if ("Hello my name is" + commandArr[4] && commandArr.includes('Hello')) {
        allNames.push(commandArr[4])

        greeting = "Nice to meet you " + commandArr[4];

    }
    else if (command.includes('What is my name')) {
        whatIsMyName = allNames.pop();
        greeting = "You are " + whatIsMyName;
    }
    else if (command.includes('Add') && command.includes('to my todo')) {
        let todos = commandArr.slice(1, -3)
        todos = todos.join(' ');
        greeting = todos + " added to your todo"
        todoActivities.push(todos);
    }

    for (let i = 0; i < todoActivities.length; i++) {
        if (command.includes('Remove') && command.includes(todoActivities[i])) {

            greeting = "Removed " + todoActivities[i] + " from your todo"
            todoActivities.splice(i, 1)
        }
    }
    for (let j = 0; j < todoActivities.length; j++)
        if (command.includes("What is on my todo?")) {
            let remainingActivities = "";
            remainingActivities = remainingActivities + todoActivities;
            greeting = "You have " + todoActivities.length + ' todos ' + remainingActivities;

        }

    if (command.includes('What day is it today?')) {
        let today = new Date();
        let day = today.getDate();

        let year = today.getFullYear();

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        let month = months[today.getMonth()];
        greeting = day + " of " + month + " " + year;


    }

    if (command.includes('Calculate')) {

        function toCalculate(num1, operator, num2) {

            let result = 0;
            if (operator === "+") {
                result = num1 + num2;
            }
            if (operator === "-") {
                result = num1 - num2;
            }
            if (operator === "*") {
                result = num1 * num2;
            }
            if (operator === "/") {
                result = num1 / num2;
            }
            greeting = result;
        }
        toCalculate(commandArr[1], '*', commandArr[3]);
    }



    if (command.includes('Set a timer')) {

        greeting = "Timer set for " + commandArr[4] + " " + commandArr[5];


        function myFunction(time, duration) {
            let minutesToMs = 60000;
            let secondsToMs = 1000;
            let hoursToMs = 3600000;
            let timer;
            if (duration == "minutes") {
                time = time * minutesToMs;

            } else if (duration == "seconds") {
                time = time * secondsToMs;
            } else if (duration == "hours") {
                time = time * hoursToMs;
            }
            return setTimeout(respondFunction, time);


        }
        function respondFunction() {
            console.log("Timer done");

        }
        myFunction(commandArr[4], commandArr[5]);
    }
    return greeting;
}


console.log(getReply('Hello my name is Slavia'))
console.log(getReply('Hello my name is Slavia'))
console.log(getReply('What is my name?'))
console.log(getReply('Hello my name is Stacia'))
console.log(getReply('What is my name'))
console.log(getReply('Add fishing to my todo'))
console.log(getReply('Add singing in the shower to my todo'))
console.log(getReply('Add practice javaScript to my todo'))
console.log(todoActivities);
console.log(getReply('Remove singing in the shower from my todo'));
console.log(todoActivities);
console.log(getReply('What is on my todo?'))
console.log(getReply('What day is it today?'))
console.log(getReply('Calculate 3 * 9'));
console.log(getReply("Set a timer of 5 seconds"));


