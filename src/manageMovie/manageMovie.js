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

        this.deleteMovie = function (movie_id) {
            ManageMovie.delete(movie_id, this.movies, this.movieType);
        };

        this.updateMovie = function (movie) {
            this.name = movie.name;
            this.type = movie.type;
            this.pubTime = movie.pubTime;
            this.director = movie.director;
            this.star = movie.star;
            $('#updateModal').modal('show');
        };
    });

