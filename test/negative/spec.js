describe('slow users', function() {
  beforeEach(function() {
    browser.get('http://localhost:3458');
  });

 it('should error text is appear', function() {
     element(by.buttonText('Add user')).click().then(function() {
     element(by.buttonText('Submit')).click();
   });
   browser.sleep(1000);
   expect(element(by.css(".ng-scope")).isDisplayed());


});



});

