angular.module('AddMovieService', [])
    .factory('Movie', function () {
        return {
            get: function(scope){
                var movies = JSON.parse(localStorage.getItem('movies' + scope.type));
                return movies || [];
            },
            add: function(scope, movies){
                var movie = {
                    name: scope.name,
                    pubTime: scope.pubTime,
                    director: scope.director,
                    star: scope.star,
                    type: scope.type
                };
                movies.push(movie);
                localStorage.setItem('movies' + scope.type, JSON.stringify(movies));
            }
        };
    });

