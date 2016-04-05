angular.module('movieApp', ['ui.router', 'ngGrid',
               'AddMovieModule', 'MovieListModule',
               'TimeFilter', 'AddMovieService', 'MovieListService'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
    });
