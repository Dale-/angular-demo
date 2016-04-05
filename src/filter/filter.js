angular.module('TimeFilter', []).filter('pubDateTime', function() {
    return function(input) {
        return input.replace(/\./g,'-');
    };
});
