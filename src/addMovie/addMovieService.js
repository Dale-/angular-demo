angular.module('AddMovieService', [])
    .factory('Movie', function () {
        return {
            get: function(movie_type){
                var movies = JSON.parse(localStorage.getItem('movies' + movie_type));
                return movies || [];
            },
            add: function(scope, movies, movie_type){
                var movie = {
                    name: scope.name,
                    pubTime: scope.pubTime,
                    director: scope.director,
                    star: scope.star,
                    type: movie_type
                };
                movies.push(movie);
                localStorage.setItem('movies' + movie_type, JSON.stringify(movies));
            }
        };
    });

