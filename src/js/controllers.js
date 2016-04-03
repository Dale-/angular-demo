var movieList = angular.module('MovieListModule', []);
//var i = 0;

movieList.controller('MovieListCtrl', function ($scope, $http, $state, $stateParams, SetItem) {
    //i++;
    //$.getJSON('../mock/movies' + $stateParams.movieType + '.json', function (json) {
    //    if (i == 1) {
    //        SetItem(json);
    //    }
    //    $scope.movies = JSON.parse(localStorage.getItem('movies'));
    //});

    $scope.movies = JSON.parse(localStorage.getItem('movies' + $stateParams.movieType));

});

movieList.controller('AddMovieCtrl', function ($scope, $http, $state, $stateParams) {

    $scope.saveMovie = function () {
        var movie_type = $('#movie_type option:selected').val();
        var movies = JSON.parse(localStorage.getItem('movies' + movie_type));
        movies = movies ? movies : [];
        var id = movies.length;
        $scope.movie = {
            name: $scope.name,
            pubTime: $scope.pubTime,
            director: $scope.director,
            star: $scope.star,
            type: movie_type,
            movieId: id + 1
        };

        movies.push($scope.movie);
        localStorage.setItem('movies' + movie_type, JSON.stringify(movies));
        document.form.reset();
    };
});

