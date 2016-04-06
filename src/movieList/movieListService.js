angular.module('MovieListModule').factory('MovieList',[]).$inject = ['Common'];

angular.module('MovieListService', [])
    .factory('MovieList', function (Common) {
        return {
            delete: function(id, movies, movieType){
                movies.splice(id, 1);
                Common.setMoviesToLocalStorage(movieType, movies);
            }
        };
    });

