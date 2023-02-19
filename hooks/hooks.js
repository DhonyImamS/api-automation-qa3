const mochaHooks = {
    beforeAll: async function() {
        console.log('INI ADALAH GLOBAL HOOKS');
    }
};

module.exports = {
    mochaHooks
};