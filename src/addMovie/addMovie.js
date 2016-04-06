angular.module('AddMovieModule', [])
    .config(function ($stateProvider) {
        $stateProvider.state('addMovie', {
            url: '/addMovie',
            templateUrl: 'addMovie/addMovie.html',
            controller: 'AddMovieCtrl',
            controllerAs: 'addMovie'

        })
    });

angular.module('AddMovieModule').controller('AddMovieCtrl',[]).$inject = ['$http', '$state', '$stateParams', 'Movie'];

angular.module('AddMovieModule')
    .controller('AddMovieCtrl', function ($http, $state, $stateParams, Movie) {

        this.saveMovie = function () {
            var movies = Movie.get(this);
            this.newMovie = Movie.getNewMovie(this);
            Movie.add(this, movies, this.newMovie);
            this.newMovie = null;
        };
    });


