var Logout = require('./logout.po.js');

describe('Logout directive Tests', function () {
    var logout = new Logout();
    logout.logIn();

    it('should login successfully', function () {
        expect(element(by.binding('username')).getText()).toEqual(logout.admin.user);
    });
    // Aby zatrzymac test (sprawdzamy go np.)
    // browser.pause();
});
