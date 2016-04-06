angular.module('movieApp')
    .config(function ($stateProvider) {
        $stateProvider.state('manageMovie', {
            url: '/manageMovie/{movieType:[0-9]{1}}',
            views: {
                '': {
                    templateUrl: 'manageMovie/manageMovieList.html',
                    controller: 'ManageMovieCtrl',
                    controllerAs: 'manageMovie'
                },
                'manageMovieType@manageMovie': {templateUrl: 'manageMovie/manageMovieType.html'},
                'manageMovieGrid@manageMovie': {templateUrl: 'manageMovie/manageMovieGrid.html'}
            }
        })
    });

angular.module('ManageMovieModule', [])
    .controller('ManageMovieCtrl', function ($http, $state, $stateParams, ManageMovie) {

        this.movieType = $stateParams.movieType;
        this.movies = ManageMovie.get(this.movieType);
        this.delete_movie = function (movie_id) {
            ManageMovie.get(movie_id, this.movies, this.movieType);
        }
    });

