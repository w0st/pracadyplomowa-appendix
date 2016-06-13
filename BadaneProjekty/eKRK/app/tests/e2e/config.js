exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*/spec.js'],

    suites: {
        przedmioty_ksztalcenia: ['przedmioty-ksztalcenia/spec.js']
    }
};
