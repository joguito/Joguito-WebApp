module.exports = function (app) {
    // Player collection auto-migrate logic
    app.dataSources.joguito_db.automigrate([
        'Player',
        'Role',
        'ACL',
        'RoleMapping',
        'JoguitoAccessToken'], function (err) {
            if (err) throw err;

            app.models.Player.create([{
                firstName: 'Mohamed',
                lastName: 'Aouled Issa',
                birthdate: '15-04-1989',
                email: 'devmed01@gmail.com',
                password: 'password',
                address: 'blah blah',
                country: 'Tunisia',
                age: 26,
                sex: "Male"
            },
            {
                firstName: 'test',
                lastName: 'test test',
                birthdate: '15-04-1989',
                email: 'tested@success.com',
                password: 'pass',
                address: 'blah blah',
                country: 'Tunisia',
                age: 26,
                sex: "Male"
            }], function (err, players) {
                if (err) throw err;
                console.log('Models created: \n', players);
            });
        });
};