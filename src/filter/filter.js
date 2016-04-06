angular.module('TimeFilter', [])
    .filter('pubDateTime', function () {
        return function (pubTime) {

            var timeArray = pubTime.split("/");

            if (timeArray.length > 2) {

                var year = timeArray[1];
                var month = timeArray[2];
                var date = timeArray[0];

                month = month[0] == '0' ? month[1] : month;
                date = date[0] == '0' ? date[1] : date;
                pubTime = year + '.' + month + '.' + date;
            }
            return pubTime;
        };
    });
