function dataCreateUser() {
    return {
        id: '1234',
        firstName: 'Dhony',
        lastName: 'Saputra',
        age: 20,
        occupation: 'testing',
        nationality: 'indonesia',
        hobbies: [
            'renang'
        ],
        gender: 'MALE',
        createdDate: '2023-02-18T07:58:23.238Z',
        updatedDate: '2023-02-18T07:58:23.238Z'
    }
};

module.exports = {
    dataCreateUser,
}


// HOOOKS ?? APA ?

// Ketika kita bikin testcase pasti butuh yang namanya PRECONDITION

// test cuci piring mamah ? ( Precondition: harus ada piring kotor )

// PRECONDITION INILAH YANG DI TRANSFORMASI DALAM DUNIA AUTOMASI TESTING SEBAGAI "HOOKS"

// HOOKS = 
//     HOOKS GLOBAL ( HOOKS YANG D EKSEKUSI SEBELUM SEMUAAAAAA TEST PROJECT DI JALANKAN )

//     HOOKS LOKAL ( HOOKS YANG D EKSEKUSI SEBELUM TEST TERTENTU DIKERJAKAN )

//         1. BeforeAll 
//         2. BeforeEach 
//         3. AfterEach 
//         4. AfterAll

//     Login Page 
//         1. test apakah username kosong
//         2. test apakah password kosong
//         3. test apakah username and password kosong
