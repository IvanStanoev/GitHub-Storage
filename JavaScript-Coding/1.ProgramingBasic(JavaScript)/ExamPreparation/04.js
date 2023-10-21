function movie(input) {

    let movies = Number(input[0]);

    let highestRating = Number.MIN_SAFE_INTEGER;
    let highestRatingMovie = "";

    let lowestRaiting = Number.MAX_SAFE_INTEGER;
    let lowestRaitingMovie = "";

    let avgRaiting = 0;

    for (let index = 1; index < input.length; index++) {

        let currentMovie = input[index];
        index++;
        let movieRaiting = Number(input[index]);

        avgRaiting += movieRaiting;

        if (movieRaiting >= highestRating) {

            highestRating = movieRaiting;
            highestRatingMovie = currentMovie;

        } else if (movieRaiting < lowestRaiting) {

            lowestRaiting = movieRaiting;
            lowestRaitingMovie = currentMovie;

        }
    }
    console.log(`${highestRatingMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestRaitingMovie} is with lowest rating: ${lowestRaiting.toFixed(1)}`);
    console.log(`Average rating: ${(avgRaiting / movies).toFixed(1)}`);
}
movie(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);