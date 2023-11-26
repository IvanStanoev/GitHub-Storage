function manageMovies(params) {

    let movies = [];

    for (let command of params) {
        if (command.includes('addMovie')) {
            let movieName = command.split('addMovie ')[1];  //
            let movieObj = { name: movieName };
            movies.push(movieObj);

        } else if (command.includes('directedBy')) {
            let [movieName, directorName] = command.split(' directedBy ');
            let movie = movies.find(movie => movie.name == movieName);  // влез намери филма чйето име садържа име на режисьор (намира първия елемент)
            if (movie) {               //ако го има този филм задаваме име на режисиьор
                movie.director = directorName;
            }
        } else if (command.includes('onDate')) {
            let [movieName, date] = command.split(' onDate ');
            let movie = movies.find(movie => movie.name == movieName);
            if (movie) {               //ако го има този филм задаваме дата
                movie.date = date;
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}
manageMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);