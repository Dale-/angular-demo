angular.module('movieApp', ['ui.router', 'ngGrid',
                            'AddMovieModule', 'MovieListModule', 'ManageMovieModule',
                            'TimeFilter', 'ManageMovieService', 'CommonService'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
    });

