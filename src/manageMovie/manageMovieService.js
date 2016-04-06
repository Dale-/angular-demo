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
            }
        };
    });

