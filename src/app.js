angular.module('movieApp', ['ui.router', 'ngGrid', 'AddMovieModule', 'MovieListModule', 'timeFilter', 'movieServices'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
    });
