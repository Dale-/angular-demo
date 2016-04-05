angular.module('timeFilter', []).filter('pubDateTime', function() {
    return function(input) {
        return input.replace(/\./g,'-');
    };
});
