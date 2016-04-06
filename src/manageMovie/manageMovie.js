angular.module('ManageMovieModule', [])
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

angular.module('ManageMovieModule').controller('ManageMovieCtrl', []).$inject = ['$stateParams', 'ManageMovie', 'Common'];

angular.module('ManageMovieModule')
    .controller('ManageMovieCtrl', function ($stateParams, ManageMovie, Common) {

        this.movieType = $stateParams.movieType;
        this.movies = Common.getMoviesByType(this.movieType);

        $('#datePicker')
            .datepicker({
                format: 'yyyy/mm/dd'
            });

        this.deleteMovie = function (movieId) {
            Common.deleteMovie(movieId, this.movies, this.movieType);
        };

        this.showMovie = function (movie, index) {
            this.formValue = ManageMovie.getForm(movie, index);
            $('#updateModal').modal('show');
        };

        this.updateMovie = function () {
            var movies = Common.getMoviesByType(this.formValue.type);
            ManageMovie.update(this.formValue, movies);
            location.reload();
        };

        this.resetMovie = function () {
            this.formValue = null;
        }

    });



