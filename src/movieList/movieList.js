angular.module('MovieListModule', [])
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

angular.module('MovieListModule').controller('MovieListCtrl',[])
    .$inject = ['$stateParams', 'GetMovies', 'DeleteMovie', 'Common'];

angular.module('MovieListModule')
    .controller('MovieListCtrl', function ($stateParams, MovieList, Common) {

        this.movieType = $stateParams.movieType;
        this.movies = Common.getMoviesByType(this.movieType);
        this.deleteMovie = function (movieId) {
            MovieList.delete(movieId, this.movies, this.movieType);
        }
    });




