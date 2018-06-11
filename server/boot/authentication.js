module.exports = function enableAuthentication(server) {
    // enable user authentication middleware
    server.enableAuth({
        dataSource: 'joguito_db'
    });
}