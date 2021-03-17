//Movies exercise

const movieUrl = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

async function fetchMoviesApi() {
    try {
        const fetchMovies = await fetch(movieUrl);
        const moviesList = await fetchMovies.json();
        console.log(moviesList);
        const badMovies = moviesList.filter(movie => movie.rating < 4.5).map(movie => movie.title)
        console.log(badMovies)
        const badMoviesFrom2000 = moviesList.filter(movie => movie.rating < 4.5 && movie.year >= 2000).map(movie => movie.title)
        console.log(badMoviesFrom2000)

    } catch (error) {
        console.log(error.message)
    }
}
fetchMoviesApi();

//Promise that resolves after set time


function toLogafterSetTime(resolveAfter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, resolveAfter * 1000);
        if (isNaN(resolveAfter)) {
            reject("Enter a number")
            //throw "Enter a number"
        }
    })
}
toLogafterSetTime("k")
    .then(() => console.log("I am called asynchronously"))
    .catch((error) => { console.log("Error:", error) })
/*
async function toLogafterSetTime(resolveAfter) {
    try {
        let waitingTime = await setTimeout(() => {
            console.log("I am called asynchronously")
        }, resolveAfter * 1000);
        return waitingTime;

    } catch (error) {
        console.log(error.message)
    }
}
toLogafterSetTime(4)*/


//Rewrite Time
//setTimout to Promise
function setTimeoutPromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);//setTimeout(     , 2000)
        if (!time) {
            reject("error")
        }
    })
}
setTimeoutPromise(3000)
    .then(() => console.log("Called after 3 seconds"))
    .catch((error) => console.log(error.message));


//  navigator.geolocation.getCurrentPosition to promise


function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition)
            function getPosition(location) {
                resolve(location)
            }
        }
        else {
            reject("Geolocation is not supported by this browser")
        }

    })
}
getCurrentLocation()
    .then((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude)
        // console.log(position)
    })
    .catch((error) => {
        console.log(error);
    })

//Fetching and Waiting
//USING PROMISE

function waitingTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000);
    })
}

function fetchingApi() {
    fetch("https://api.jikan.moe/v3/search/anime?q=paw%20patrol")
        .then(response => response.json())
        .then(anime => {
            // console.log(anime)
            console.log(anime.results[0].image_url)
        }
        )
        .catch(err => console.log(err.message))
}

waitingTime()
    .then(fetchingApi);



//USING ASYNC AWAIT

const delay = function (time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

async function fetching() {


    try {
        const fetchApi = await fetch("https://api.jikan.moe/v3/search/anime?q=paw%20patrol")
        const fetchData = await fetchApi.json();
        console.log(fetchData.results[1].image_url)
    }
    catch (error) {
        console.log(error)
    }

}

(async () => {
    await delay(3000);
    await fetching();
})();

