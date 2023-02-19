const expect = require('chai').expect;
const apiUnderTest = require('../api/api_swager');
const dataTest = require('../data/data_test_swagger');
const runTestCase = require('../testcases/tc_api_swagger').testcases;
//const dataJson = require('../file/data_payload')
//const {before} = require(mocha)

describe.only (runTestCase.description, async () => {
    before(async() =>{
        console.log('dieksekuasi sebelum semua it')
    });

    beforeEach(async() =>{
        console.log('dieksekuasi sebelum SEBUAH it')
    });

    it(runTestCase.positive.case1, async () => {
        const data = dataTest.dataCreateUser();
        data.hobbies = [];

       // console.log(data);
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        //console.log(response.body);

        // assertion
        // expect(response.body.name).to.equal(data.name);
    });

    it(runTestCase.positive.case2, async () => {
        const data = dataTest.dataCreateUser();
        data.hobbies = [];

        // console.log(data);
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        //console.log(response.body);

        // assertion
        expect(response.body.name).to.equal(data.name);
    });

    it('Test apakah endpoint create user berfungsi membuat data user dengan hobi ada isinya tp angka', async () => {
        const data = dataTest.dataCreateUser();
        data.hobbies = 123456789;

        //console.log(data);
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        //console.log(response.error);

        // assertion
         expect(response.body.name).to.equal(data.name);
    });

    it('Test apakah endpoint create user berfungsi membuat data user dengan data yang sesuai', async () => {
        const data = dataTest.dataCreateUser();

        //console.log(data);
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        //console.log(response.body);

        // assertion
        expect(response.body.name).to.equal(data.name);
    });

    after(async() =>{
        console.log('dieksekuasi terakhir setelah semua it')
    });

});