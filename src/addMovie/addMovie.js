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
            var movies = Movie.get(this);
            Movie.add(this, movies);
            document.form.reset();
        };
    });



