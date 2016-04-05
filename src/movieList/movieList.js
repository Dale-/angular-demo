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
    .controller('MovieListCtrl', function ($http, $state, $stateParams, GetMovies, DeleteMovie) {

        this.movieType = $stateParams.movieType;
        this.movies = GetMovies(this.movieType);
        this.delete_movie = function (movie_id) {
            DeleteMovie(movie_id, this.movies, this.movieType);
        }
    });

