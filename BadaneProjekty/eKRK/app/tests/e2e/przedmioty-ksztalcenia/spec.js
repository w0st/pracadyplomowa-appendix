var PrzedmiotyKsztalcenia = require('./przedmioty-ksztalcenia.po.js');

describe('Przedmioty-Ksztalcenia Tests', function () {
    var przedmiotyKsztalcenia = new PrzedmiotyKsztalcenia();
    przedmiotyKsztalcenia.get();

    it('should add przedmiot-ksztalcenia successfully', function () {
        element(by.binding('przedmioty_ksztalcenia_btn_add')).click();
        element(by.model('vm.przedmiot.nazwaPrzedmiotu')).sendKeys(przedmiotyKsztalcenia.nazwa1);
        element(by.model('vm.przedmiot.pracownik_naukowy_id')).click();
        element(by.cssContainingText('option', 'janusz.martan')).click();
        element(by.binding('global_btn_save')).click();
        expect((element.all(by.repeater('przedmiot in vm.przedmiotyKsztalcenia').column('nazwaPrzedmiotu'))).last().getText())
            .toEqual(przedmiotyKsztalcenia.nazwa1);
    });

    it('should show error message when use twice the same name', function() {
        element(by.binding('przedmioty_ksztalcenia_btn_add')).click();
        element(by.model('vm.przedmiot.nazwaPrzedmiotu')).sendKeys(przedmiotyKsztalcenia.nazwa1);
        element(by.model('vm.przedmiot.pracownik_naukowy_id')).click();
        element(by.cssContainingText('option', 'janusz.martan')).click();
        element(by.binding('global_btn_save')).click();
        expect(element(by.binding('vm.errorUnique')).getText()).toEqual(przedmiotyKsztalcenia.komunikat1);
    });

    it('should edit name', function() {
        element(by.binding('global_btn_cancel')).click();
        element.all(by.binding('global_btn_edit')).last().click();
        element(by.model('vm.przedmiot.nazwaPrzedmiotu')).clear();
        element(by.model('vm.przedmiot.nazwaPrzedmiotu')).sendKeys(przedmiotyKsztalcenia.nazwa2);
        element(by.binding('global_btn_save')).click();
        expect((element.all(by.repeater('przedmiot in vm.przedmiotyKsztalcenia').column('nazwaPrzedmiotu'))).last().getText())
            .toEqual(przedmiotyKsztalcenia.nazwa2);
    });

    it('shuld delete selected przedmiot-ksztalcenia', function() {
        element.all(by.css('[ng-click="vm.select(przedmiot)"]')).last().click();
        element(by.css('[ng-click="vm.delete(vm.selected.id)"]')).click();
        expect((element.all(by.repeater('przedmiot in vm.przedmiotyKsztalcenia').column('nazwaPrzedmiotu'))).last().getText())
            .not.toEqual(przedmiotyKsztalcenia.nazwa2);
    });
});
