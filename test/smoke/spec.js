describe('slow users', function() {
  beforeEach(function() {
    browser.get('http://localhost:3458');
  });


    it('page should  appear ', function () {
      expect(element(by.css('body')).isDisplayed()).toBe(true);

    });


    it('button Add User should  appear ', function () {
      expect(element(by.buttonText('Add user')).isDisplayed()).toBe(true);

    });


   it('button rename should appear', function () {
      expect(element(by.css('body > div > ol > li:nth-child(1) > div > button:nth-child(1)')).isDisplayed()).toBe(true);

    });


    it('button delete should appear ', function () {
      expect(element(by.css('body > div > ol > li:nth-child(1) > div > button:nth-child(2)')).isDisplayed()).toBe(true);

    });


   
   it('should popup appear',function() {
    element(by.buttonText('Add user')).click().then(function() {
     browser.sleep(1000);
});
  expect(element(by.className('modal-open')).isDisplayed()).toBe(true);
});



 it('popup should disappear',function(){
   element(by.buttonText('Add user')).click().then(function() {
   element(by.buttonText('cancel')).click().then(function(){;
   browser.sleep(1000);
   expect(element(by.css('html')).isDisplayed()).toBe(true);
  


});



});


});

});

