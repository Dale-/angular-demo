
angular.module('CommonService', [])
    .factory('Common', function () {
        return {
            getMoviesByType: function(type){
                return JSON.parse(localStorage.getItem('movies' + type)) || [];
            },
            setMoviesToLocalStorage: function(type, movies) {
                localStorage.setItem('movies' + type, JSON.stringify(movies));
            }
            //getNewMovie: function(scope) {
            //    return {
            //        name: scope.newMovie.name,
            //        pubTime: scope.newMovie.pubTime,
            //        director: scope.newMovie.director,
            //        star: scope.newMovie.star,
            //        type: scope.newMovie.type
            //    }
            //}
            //,
            //add: function(scope, movies, movie){
            //    movies.push(movie);
            //    localStorage.setItem('movies' + scope.newMovie.type, JSON.stringify(movies));
            //}
        };
    });

