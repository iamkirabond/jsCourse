
let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How many movies have you watched?", '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many movies have you watched?", '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function showMyDB(status){
    if (!status)
        console.log(personalMovieDB);
}

function writeYourGenres(){
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Your favorite genre number ${i+1}`);
    }
    console.log(personalMovieDB);
}
writeYourGenres();

function rememberMovies(){
    for (let i = 0; i < 2; i++){
        const lastMovie = prompt('What was the last movie you have whatched?', '');
        const lastMovieRate = prompt('How you rate it?', '');
        if (lastMovie != null && lastMovieRate != null && lastMovie != '' && lastMovieRate != '' && lastMovie.length < 50){
            personalMovieDB.movies[lastMovie] = lastMovieRate;
        }
        else{
            i--;
        }
    }
}


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        alert('Not many movies');
    }
    else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert('I see you like movies');
    }
    else if(personalMovieDB.count >= 30){
        alert('You really into it');
    }
    else{
        alert('Something went wrong');
    }
}


console.log(personalMovieDB);