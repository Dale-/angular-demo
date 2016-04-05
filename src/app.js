angular.module('movieApp', ['ui.router', 'ngGrid',
                            'AddMovieModule', 'MovieListModule', 'ManageMovieModule',
                            'TimeFilter', 'AddMovieService', 'MovieListService', 'ManageMovieService'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
    });
