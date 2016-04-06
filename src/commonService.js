
angular.module('CommonService', [])
    .factory('Common', function () {
        return {
            getMoviesByType: function(type){
                return JSON.parse(localStorage.getItem('movies' + type)) || [];
            },
            setMoviesToLocalStorage: function(type, movies) {
                localStorage.setItem('movies' + type, JSON.stringify(movies));
            },
            deleteMovie: function(index, movies, type) {
                movies.splice(index, 1);
                this.setMoviesToLocalStorage(type, movies);
            },
            getMoviesOfString: function(type) {
                return JSON.parse(this.getMoviesByType(type));
            }
        };
    });

