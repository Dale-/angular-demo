angular.module('AddMovieService', [])
    .factory('Movie', function () {
        return {
            get: function(scope){
                return JSON.parse(localStorage.getItem('movies' + scope.newMovie.type)) || [];
            },
            getNewMovie: function(scope) {
                return {
                    name: scope.newMovie.name,
                    pubTime: scope.newMovie.pubTime,
                    director: scope.newMovie.director,
                    star: scope.newMovie.star,
                    type: scope.newMovie.type
                }
            }
            ,
            add: function(scope, movies, movie){
                movies.push(movie);
                localStorage.setItem('movies' + scope.newMovie.type, JSON.stringify(movies));
            }
        };
    });

