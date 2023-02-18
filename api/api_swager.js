const httpLib = require('supertest');
const serverAPI = httpLib('http://localhost:1234/v1');


function createUser(data) {
    return serverAPI
        .post('/users')
        .set('Authorization', 1234)
        .send(data);
}

module.exports = {
    createUser
}