angular.module('MovieListModule', [])
    .controller('MovieListCtrl', function ($http, $state, $stateParams, GetMovies, DeleteMovie) {

        this.movieType = $stateParams.movieType;
        this.movies = GetMovies(this.movieType);
        this.delete_movie = function (movie_id) {
            DeleteMovie(movie_id, this.movies, this.movieType);
        }
    }).controller('AddMovieCtrl', function ($http, $state, $stateParams, GetMoviesByType, AddMovieToMovies) {

        this.saveMovie = function () {
            var movie_type = $('#movie_type option:selected').val();
            var movies = GetMoviesByType(movie_type);
            AddMovieToMovies(this, movies, movie_type);
            document.form.reset();
        };
    });

