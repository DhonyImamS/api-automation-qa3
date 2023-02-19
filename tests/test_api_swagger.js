const chai = require('chai');
chai.use(require('chai-json-schema'));

const expect = require('chai').expect;
const apiUnderTest = require('../api/api_swager');
const dataTest = require('../data/data_test_swagger');
const { testcases }  = require('../testcases/tc_api_swagger');
const jsonDataTest = require('../file/payload_create_user_swagger.json');
const schemaResponse = require('../schema/response_getUser_swagger_schema');
const { before } = require('mocha');


describe(testcases.description, async () => {
    let dataTampungan = '';

    before(async () => {
        const response = await apiUnderTest.getUser(jsonDataTest.firstName);
        
        const selectedData = response.body.data.filter(data => data.id === '7b9c6c9e-af36-430f-8424-5fa763593156');
        console.log(selectedData);

        dataTampungan = selectedData[0];
    });

    beforeEach(
        async () => {
            console.log('INI DIEKSEKUSI SEBELUM SETIAP IT NYA DI SIKAT');
        }
    );

    afterEach(
        async () => {
            console.log('INI DIEKSEKUSI SESUDAH SETIAP IT NYA DI SIKAT');
        }
    );

    after(async () => {
        console.log('INI DIEKSEKUSI TERAKHIR YA TMN2 SETELAH SMW IT DI SIKAT');
    });

    it(testcases.negative.case1, async () => {

        console.log(dataTampungan);

        const data = dataTest.dataCreateUser();
        data.hobbies = [];

        // console.log(data);
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        // console.log(response.body);

        // assertion
        // expect(response.body.name).to.equal(data.name);
    });

    it(testcases.negative.case2, async () => {
        const data = dataTest.dataCreateUser();
        data.hobbies = 123456789;

        console.log(data);
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        console.log(response.error);

        // assertion
        // expect(response.body.name).to.equal(data.name);
    });

    it(testcases.positive.case1, async () => {
        const data = dataTest.dataCreateUser();

        console.log(data);
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        console.log(response.body);

        // assertion
        // expect(response.body.name).to.equal(data.name);
    });

    it(testcases.positive.case2, async () => {
        const data = jsonDataTest;

        console.log(data);
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        console.log(response.body);

        // assertion
        expect(response.body.age).to.equal(data.age);
        expect(response.body.hobbies).eql(data.hobbies);

        // saya mau cek kalau occupation saya mengandung kata "test"
        expect(response.body.occupation).to.contain('tesat');
    });

    it(testcases.positive.case3, async () => {
        const data = jsonDataTest;

        console.log(data);
        let response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        // console.log(response.body);

        // assertion
        expect(response.body.age).to.equal(data.age);
        expect(response.body.hobbies).eql(data.hobbies);

        // Coba dimake sure dengan hit endpoint Get User 
        response = await apiUnderTest.getUser(data.firstName);
        console.log(response.body);

        for(let index = 0; index < response.body.data.length; index++) {
            expect(response.body.data[index]).to.have.jsonSchema(schemaResponse.getUserSwaggerSchemaResponse);
        }
        // expect(response.body).to.have.jsonSchema(schemaResponse.getUserSwaggerSchemaResponse);
    });
});
