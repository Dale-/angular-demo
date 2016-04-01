var movieList = angular.module('MovieListModule', []);
var i = 0;

movieList.controller('MovieListCtrl', function($scope, $http, $state, $stateParams, SetItem) {
    i++;
    $.getJSON('../mock/movies' + $stateParams.movieType + '.json',function(json){
        if( i == 1 ) {
            SetItem(json);
        }
        $scope.movies = JSON.parse(localStorage.getItem('movies'));
    });
});

movieList.controller('AddMovieCtrl', function($scope, $http, $state, $stateParams) {

    $scope.saveMovie = function() {
        var id = JSON.parse(localStorage.getItem('movies')).length;
        $scope.movie = { name: $scope.name, pubTime:$scope.pubTime, director: $scope.director, star: $scope.star, type:"1", movieId: id + 1};
        $scope.movies = JSON.parse(localStorage.getItem('movies'));
        $scope.movies.push($scope.movie);
        localStorage.setItem('movies', JSON.stringify($scope.movies));
    };
});

