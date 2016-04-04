var movieList = angular.module('MovieListModule', []);

movieList.controller('MovieListCtrl', function ($scope, $http, $state, $stateParams, GetMovies, DeleteMovie) {

    $scope.movieType = $stateParams.movieType;
    $scope.movies = GetMovies($scope.movieType);
    $scope.delete_movie = function (movie_id) {
        DeleteMovie(movie_id, $scope.movies, $scope.movieType);
    }
});

movieList.controller('AddMovieCtrl', function ($scope, $http, $state, $stateParams) {

    $scope.saveMovie = function () {
        var movie_type = $('#movie_type option:selected').val();
        var movies = JSON.parse(localStorage.getItem('movies' + movie_type));
        movies = movies ? movies : [];
        $scope.movie = {
            name: $scope.name,
            pubTime: $scope.pubTime,
            director: $scope.director,
            star: $scope.star,
            type: movie_type
        };

        movies.push($scope.movie);
        localStorage.setItem('movies' + movie_type, JSON.stringify(movies));
        document.form.reset();
    };
});

