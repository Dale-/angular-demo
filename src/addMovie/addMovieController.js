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
    .controller('AddMovieCtrl', function ($http, $state, $stateParams, GetMoviesByType, AddMovieToMovies) {

        this.saveMovie = function () {
            var movie_type = $('#movie_type option:selected').val();
            var movies = GetMoviesByType(movie_type);
            AddMovieToMovies(this, movies, movie_type);
            document.form.reset();
        };
    });

AddMovieCtrl.$inject = ["$http", "$state", "$stateParams", "GetMoviesByType", "AddMovieToMovies"];


