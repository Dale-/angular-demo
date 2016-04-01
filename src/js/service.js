
angular.module('movieServices',[]).factory('SetItem', function(){
    return function(data){
        localStorage.setItem('movies', JSON.stringify(data));
    }
});
