angular.module('movieApp')
    .config(function ($stateProvider) {
        $stateProvider.state('addMovie', {
            url: '/addMovie',
            templateUrl: 'addMovie/addMovie.html',
            controller: 'AddMovieCtrl',
            controllerAs: 'addMovie'

        })
    });

angular.module('AddMovieModule', [])
    .controller('AddMovieCtrl', function ($http, $state, $stateParams, Movie) {

        this.saveMovie = function () {
            var movie_type = $('#movie_type option:selected').val();
            var movies = Movie.get(movie_type);
            Movie.add(this, movies, movie_type);
            document.form.reset();
        };
    });



