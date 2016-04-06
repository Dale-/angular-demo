angular.module('ManageMovieService',[]).factory('ManageMovie',[]).$inject = ['Common'];

angular.module('ManageMovieService')
    .factory('ManageMovie', function (Common) {
        return {
            getForm: function (scope, index) {
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
            update: function (scope, movies) {
                var movie = Common.getMovie(scope);

                if (scope.type == scope.originType) {
                    movies[scope.index] = movie;
                    Common.setMoviesToLocalStorage(scope.type, movies);
                } else {
                    var originMovies = Common.getMoviesByType(scope.originType);
                    Common.deleteMovie(scope.index, originMovies, scope.originType);
                    Common.addMovie(movie, movies, scope.type);
                }
            }
        };
    });

