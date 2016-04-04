var movie = angular.module('movieApp', ['ui.router', 'ngGrid', 'MovieListModule', 'timeFilter', 'movieServices']);

movie.config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/index');
   $stateProvider
       .state('index', {
           url: '/index',
           views: {
               '': { templateUrl: 'tpls/home.html' },
               'main@index': { templateUrl: 'tpls/login.html'}
           }

       })
       .state('movieList', {
           url: '/{movieType:[0-9]{1,4}}',
           views: {
               '': { templateUrl: 'tpls/movieList.html' },
               'movieType@movieList': { templateUrl: 'tpls/movieType.html' },
               'movieGrid@movieList' : { templateUrl: 'tpls/movieGrid.html' }
           }
       })
       .state('addMovie', {
          url: '/addMovie',
           templateUrl: 'tpls/addMovie.html'
       })
});
