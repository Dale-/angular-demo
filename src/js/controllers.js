var movieList = angular.module('MovieListModule', []);

movieList.controller('MovieListCtrl', function ($scope, $http, $state, $stateParams, GetMovies, DeleteMovie) {

    $scope.movieType = $stateParams.movieType;
    $scope.movies = GetMovies($scope.movieType);
    $scope.delete_movie = function (movie_id) {
        DeleteMovie(movie_id, $scope.movies, $scope.movieType);
    }
});

movieList.controller('AddMovieCtrl', function ($scope, $http, $state, $stateParams, GetMoviesByType, AddMovieToMovies) {

    $scope.saveMovie = function () {
        var movie_type = $('#movie_type option:selected').val();
        var movies = GetMoviesByType(movie_type);
        AddMovieToMovies($scope, movies, movie_type);
        document.form.reset();
    };
});

