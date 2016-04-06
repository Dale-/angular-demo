angular.module('AddMovieModule', [])
    .config(function ($stateProvider) {
        $stateProvider.state('addMovie', {
            url: '/addMovie',
            templateUrl: 'addMovie/addMovie.html',
            controller: 'AddMovieCtrl',
            controllerAs: 'addMovie'

        })
    });

angular.module('AddMovieModule').controller('AddMovieCtrl', []).$inject = ['Common'];

angular.module('AddMovieModule')
    .controller('AddMovieCtrl', function (Common) {

            $('#datePicker')
                .datepicker({
                    format: 'yyyy/mm/dd'
                });

            this.saveMovie = function () {
                var movies = Common.getMoviesByType(this.newMovie.type);
                this.newMovie = Common.getMovie(this.newMovie);
                Common.addMovie(this.newMovie, movies, this.newMovie.type);
                this.newMovie = null;
            };
        }
    );
