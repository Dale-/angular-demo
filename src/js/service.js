
angular.module('movieServices',[]).factory('GetMovies', function(){
    return function(movieType){
        var movies = JSON.parse(localStorage.getItem('movies' + movieType));
        return movies ? movies : [];
    };
});
