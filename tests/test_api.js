
// FUNCTIONAL PROGRAMMING, CALLBACK 

// function siPalingNgeLog(input) {
//     return console.log(input);
// }

// function sum(a, b) {
//     const result = a + b;
//     return console.log(result)
// }

// function sum2(a, b, hula) {
//     const result = a + b;
//     return hula(result);
// }

// sum(1,9);

// sum2(1,9,siPalingNgeLog);

// sum2(1,9,function siPalingNgeLog(input) {
//     return console.log(input);
// });

const expect = require('chai').expect;
const apiUnderTest = require('../api/api_reqres');


describe('Test Endpoint https://reqres.in/api/users', async () => {
    it('Test apakah endpoint get user berfungsi mengembalikan data yang sesuai yaini tidak ada firstname yang kosong', async () => {
        
        const response = await apiUnderTest.getUser();
        // console.log(response.status);
        // console.log(response.body);

        // assertion
        const data = response.body.data;

        for(let index=0; index < data.length; index++) {
            // data[index].first_name tidak boleh kosong

            console.log(data[index].first_name);
            expect(data[index].first_name).to.not.equal('');
        }
    });

    it('Test apakah endpoint create user berfungsi membuat data user yang sesuai dengan inputnya', async () => {
        const data = {
            "name": "morpheus",
            "job": "leader"
        };
        let response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        // console.log(response.body);

        // assertion
        expect(response.body.name).to.equal(data.name);
        expect(response.body.job).to.equal(data.job);

        // coba cek ah ketika fungsi get,.. apakah datanya ada ga ada 
        response = await apiUnderTest.getSingleUser('7');
        expect(response.body.data.first_name).to.equal('Michael');
    });

    it('Test apakah endpoint create user berfungsi membuat data user ketika inputnya name itu kosong', async () => {
        const data = {
            "name": "",
            "job": "leader"
        };
        const response = await apiUnderTest.createUser(data);
        // console.log(response.status);
        // console.log(response.body);

        // assertion
        expect(response.body.name).to.equal(data.name);
    });
});
