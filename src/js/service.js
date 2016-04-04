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
    });

