var PrzedmiotyKsztalcenia = function() {

    this.get = function() {
        browser.get('http://127.0.0.1:5000/przedmioty-ksztalcenia');
    };

    this.nazwa1 = "Matematyka dyskretna";
    this.nazwa2= "Analiza matematyczna";
    this.komunikat1 = "Please insert unique name for the subject"

};

module.exports = PrzedmiotyKsztalcenia;
