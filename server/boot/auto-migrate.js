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
                country: 'Germany',
                age: 26,
                sex: "Male"
            },
            {
                firstName: 'John',
                lastName: 'Doe',
                birthdate: '19-08-1982',
                email: 'john.doe@test.com',
                password: 'pass',
                address: 'blah blah',
                country: 'USA',
                age: 26,
                sex: "Male"
            }], function (err, players) {
                if (err) throw err;
                console.log('Models created: \n', players);
            });
        });
};