const mochaGlobalHook = {
    before: async function() {
        console.log('INI ADALAH GLOBAL HOOKS');
    }
};

module.exports = {
    mochaGlobalHook
};