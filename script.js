



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt("How many movies have you watched?", '');
        while(personalMovieDB.count == '' || numberOfFilms == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("How many movies have you watched?", '');
        }
    },
    writeYourGenres: function (){
        for (let i = 0; i < 3; i++){
            let currentGenre = prompt(`Your favorite genre number ${i+1}`);
            if (currentGenre != null && currentGenre != '')
                personalMovieDB.genres[i] = currentGenre;
            else
                i--;
        }
        personalMovieDB.genres.forEach((ganre, i)=>{
            console.log(`Your favorite ganre number ${i+1} is ${ganre}`);
        });
        console.log(personalMovieDB);
    },
    showMyDB: function (status){
        if (!status)
            console.log(personalMovieDB);
    },
    rememberMovies: function (){
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
    },
    detectPersonalLevel: function (){
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
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat)
            personalMovieDB.privat = false;
        else
            personalMovieDB.privat = true;
        console.log(personalMovieDB.privat);
    },
};






console.log(personalMovieDB);
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB);
personalMovieDB.writeYourGenres();
