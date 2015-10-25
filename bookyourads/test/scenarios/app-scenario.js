(function(){
    'use strict';

    /**
     * This is a sample controller spec
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    describe('application bookyourads', function() {

        var helpLink = element(by.id('help'));
        var helpHeader = element(by.id('helpHeader'));
        var logo = element(by.id('logo'));
        var homeHeader = element(by.binding('message'));

        browser.get('http://localhost:9000/app');

        beforeEach(function() {
            // do tasks before running each scenario
        });

        it('should have a title', function() {

            expect(browser.getTitle()).toEqual('ng-AppGen - Angular Application Generator');

        });

        it('should navigate to help screen on click of help link', function() {

            helpLink.click();
            expect(helpHeader.getText()).toEqual('Help Needed?');

        });

        it('should reload the app on click of logo', function() {

            logo.click();
            expect(homeHeader.getText()).toEqual('Congratulations! Your app is fully up and running.');

        });

    });

})();
