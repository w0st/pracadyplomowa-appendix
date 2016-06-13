var Logout = function() {

    this.admin = {
        user: 'admin@example.com',
        pass: 'admin1234'
    };

    this.logIn = function() {
        browser.get("http://127.0.0.1:5000");
        element(by.binding('global_not_logged')).click();
        element(by.binding('global_login')).click();
        browser.driver.findElement(by.id('user_email')).sendKeys(this.admin.user);
        browser.driver.findElement(by.id('user_password')).sendKeys(this.admin.pass);
        browser.driver.findElement(by.xpath("//input")).submit();
    };

    this.get = function() {
        browser.get('http://127.0.0.1:5000/');
    };
};

module.exports = Logout;
