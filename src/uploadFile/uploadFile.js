angular.module('AddMovieModule', [])
    .config(function ($stateProvider) {
        $stateProvider.state('addMovie', {
            url: '/addMovie',
            templateUrl: 'addMovie/addMovie.html',
            controller: 'AddMovieCtrl',
            controllerAs: 'addMovie'

        })
    });

angular.module('AddMovieModule').controller('AddMovieCtrl', []).$inject = ['Movie'];

angular.module('AddMovieModule')
    .controller('AddMovieCtrl', function (Movie) {

            $('#datePicker')
                .datepicker({
                    format: 'yyyy/mm/dd'
                });

            this.saveMovie = function () {
                console.log(this.newMovie.pic);
                var movies = Movie.get(this);
                this.newMovie = Movie.getNewMovie(this);
                Movie.add(this, movies, this.newMovie);
                this.newMovie = null;
            };
        }
    );
