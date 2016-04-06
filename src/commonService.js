angular.module('CommonService', [])
    .factory('Common', function () {
        return {
            getMoviesByType: function (type) {
                return JSON.parse(localStorage.getItem('movies' + type)) || [];
            },
            setMoviesToLocalStorage: function (type, movies) {
                localStorage.setItem('movies' + type, JSON.stringify(movies));
            },
            deleteMovie: function (index, movies, type) {
                movies.splice(index, 1);
                this.setMoviesToLocalStorage(type, movies);
            },
            getMovie: function (form) {
                return {
                    name: form.name,
                    pubTime: form.pubTime,
                    director: form.director,
                    star: form.star,
                    type: form.type
                }
            },
            addMovie: function (movie, movies, type) {
                movies.push(movie);
                this.setMoviesToLocalStorage(type, movies);
            }
        };
    });

