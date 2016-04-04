angular.module('movieServices', [])
    .factory('GetMovies', function () {
        return function (movieType) {
            var movies = JSON.parse(localStorage.getItem('movies' + movieType));
            return movies ? movies : [];
        };
    })
    .factory('DeleteMovie', function () {
        return function (id, movies, movieType) {
            movies.splice(id, 1);
            localStorage.setItem('movies' + movieType, JSON.stringify(movies));
        };
    })
    .factory('GetMoviesByType', function () {
    return function (movie_type) {
        var movies = JSON.parse(localStorage.getItem('movies' + movie_type));
        return movies ? movies : [];
        };
    })
    .factory('AddMovieToMovies', function () {
    return function (scope, movies, movie_type) {
        var movie = {
            name: scope.name,
            pubTime: scope.pubTime,
            director: scope.director,
            star: scope.star,
            type: movie_type
        };

        movies.push(movie);
        localStorage.setItem('movies' + movie_type, JSON.stringify(movies));
        };
    });

