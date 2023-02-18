const expect = require('chai').expect;
const apiUnderTest = require('../api/api_swager');
const dataTest = require('../data/data_test_swagger');


describe.only('Test Endpoint http://localhost:1234/v1/users', async () => {
    it('Test apakah endpoint create user berfungsi membuat data user dengan hobi kosong', async () => {
        const data = dataTest.dataCreateUser();
        data.hobbies = [];

        console.log(data);
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        console.log(response.body);

        // assertion
        // expect(response.body.name).to.equal(data.name);
    });

    it('Test apakah endpoint create user berfungsi membuat data user dengan hobi ada isinya tp angka', async () => {
        const data = dataTest.dataCreateUser();
        data.hobbies = 123456789;

        console.log(data);
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        console.log(response.error);

        // assertion
        // expect(response.body.name).to.equal(data.name);
    });

    it('Test apakah endpoint create user berfungsi membuat data user dengan data yang sesuai', async () => {
        const data = dataTest.dataCreateUser();

        console.log(data);
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        console.log(response.body);

        // assertion
        // expect(response.body.name).to.equal(data.name);
    });
});
