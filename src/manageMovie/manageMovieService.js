angular.module('ManageMovieService', [])
    .factory('ManageMovie', function () {
        return {
            get: function(movieType){
                var movies = JSON.parse(localStorage.getItem('movies' + movieType));
                return movies || [];
            },
            delete: function(id, movies, movieType){
                movies.splice(id, 1);
                localStorage.setItem('movies' + movieType, JSON.stringify(movies));
            },
            getForm: function(scope, index) {
                return {
                    name: scope.name,
                    pubTime: scope.pubTime,
                    director: scope.director,
                    star: scope.star,
                    type: scope.type,
                    index: index,
                    originType: scope.type
                }
            },
            update: function(scope, movies){
                var movie = {
                    name: scope.name,
                    pubTime: scope.pubTime,
                    director: scope.director,
                    star: scope.star,
                    type: scope.type
                };

                if(scope.type == scope.originType) {
                    movies[scope.index] = movie;
                    localStorage.setItem('movies' + scope.type, JSON.stringify(movies));
                } else {
                    var originMovies = JSON.parse(localStorage.getItem('movies' + scope.originType)) || [];
                    originMovies.splice(scope.index, 1);
                    localStorage.setItem('movies' + scope.originType, JSON.stringify(originMovies));
                    movies.push(movie);
                    localStorage.setItem('movies' + scope.type, JSON.stringify(movies));
                }
            }
        };
    });

