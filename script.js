
const numberOfFilms = +prompt("How many movies have you watched?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

for (let i = 0; i < personalMovieDB.count; i++){
    const lastMovie = prompt('What was the last movie you have whatched?', '');
    const lastMovieRate = prompt('How you rate it?', '');
    if (lastMovie != null && lastMovieRate != null && lastMovie != '' && lastMovieRate != '' && lastMovie.length < 50){
        personalMovieDB.movies[lastMovie] = lastMovieRate;
    }
    else{
        i--;
    }
}

console.log(personalMovieDB);