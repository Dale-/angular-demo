
angular.module('ManageMovieService', [])
    .factory('ManageMovie', function (Common) {
        return {
            get: function(movieType){
                return JSON.parse(localStorage.getItem('movies' + movieType));
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
                    Common.setMoviesToLocalStorage(scope.type, movies);
                } else {
                    var originMovies = JSON.parse(localStorage.getItem('movies' + scope.originType)) || [];
                    originMovies.splice(scope.index, 1);
                    Common.setMoviesToLocalStorage(scope.originType, originMovies);
                    movies.push(movie);
                    Common.setMoviesToLocalStorage(scope.type, movies);
                }
            }
        };
    });

