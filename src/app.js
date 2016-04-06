angular.module('movieApp', ['ui.router', 'ngGrid',
                            'AddMovieModule', 'MovieListModule', 'ManageMovieModule',
                            'TimeFilter', 'AddMovieService', 'ManageMovieService', 'CommonService'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
    });

