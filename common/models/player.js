'use strict';

/*
*   Player collection controller (model controller)
*/
module.exports = function (Player) {
    Player.status = function (id, res) {
        var currentdate = new Date();
        var currentHours = currentdate.getHours();
        var AVAILABLE_FROM = 6;
        var AVAILABLE_UNTIL = 20;
        var playerID = Player.findOne({ 'id': id }, function found(err, result) {
            if (err) {
                res(null, err)
            }
            console.log('Current hour is %d', currentHours);
            var response = (currentHours >= AVAILABLE_FROM && currentHours < AVAILABLE_UNTIL)
                ? Player.firstName + " is available"
                : Player.firstName + " is not available";
            res(null, response);
        });
    };

    Player.remoteMethod(
        'status', {
            http: {
                path: '/status',
                verb: 'get'
            },
            accepts: {
                arg: 'id',
                type: 'number',
                http: {
                    source: 'query'
                }
            },
            returns: {
                arg: 'status',
                type: 'string'
            }
        }
    )
};
