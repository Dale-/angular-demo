angular.module('movieApp')
    .config(function ($stateProvider) {
        $stateProvider.state('index', {
            url: '/index',
            views: {
                '': {templateUrl: 'layout/home.html'},
                'main@index': {templateUrl: 'login/login.html'}
            }

        });
    });
