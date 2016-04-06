angular.module('movieApp')
    .config(function ($stateProvider) {
        $stateProvider.state('movieList', {
            url: '/{movieType:[0-9]{1}}',
            views: {
                '': {
                    templateUrl: 'movieList/movieList.html',
                    controller: 'MovieListCtrl',
                    controllerAs: 'movieList'
                },
                'movieType@movieList': {templateUrl: 'movieList/movieType.html'},
                'movieGrid@movieList': {templateUrl: 'movieList/movieGrid.html'}
            }
        })
    });

angular.module('MovieListModule', [])
    .controller('MovieListCtrl', function ($http, $state, $stateParams, MovieList) {

        this.movieType = $stateParams.movieType;
        this.movies = MovieList.get(this.movieType);
        this.delete_movie = function (movie_id) {
            MovieList.delete(movie_id, this.movies, this.movieType);
        }
    });

//MovieListCtrl.$inject(['$http', '$state', '$stateParams', 'GetMovies', 'DeleteMovie']);

//angular.module('MovieListModule').controller('MovieListCtrl').$inject = ['$http', '$state', '$stateParams', 'GetMovies', 'DeleteMovie'];

