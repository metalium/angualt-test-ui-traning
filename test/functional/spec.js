describe('slow users', function() {
  beforeEach(function() {
    browser.get('http://localhost:3458');
  });

 it('should add user',function() {
   var users = element.all(by.repeater('user in usersList'));

     users.count().then(function(firstValue) { 
     element(by.buttonText('Add user')).click().then(function() {
     element(by.model('name')).sendKeys("Yan");
     element(by.buttonText('Submit')).click();
    });

    users.count().then(function(lastValue) {

     //console.log('DEBUG -> ', firstValue + '/' + lastValue);
      expect(firstValue < lastValue ? true : false).toBe(true);
   });

   });

  
 });



 it('should delete user', function() {
    var users = element.all(by.repeater('user in usersList'));
       


   users.count().then(function(firstValue) { 

     element(by.css('body > div > ol > li:nth-child(1) > div > button:nth-child(2)')).click();
      browser.sleep(1000);
     users.count().then(function(lastValue) {
        expect(firstValue > lastValue ? true : false).toBe(true)
       });

    });
    
 });

it('should check the entered user is added',function() {
  var users = element.all(by.repeater('user in usersList'));
  element(by.buttonText('Add user')).click().then(function() {
    element(by.model('name')).sendKeys("Yan");
     element(by.buttonText('Submit')).click();
    });

  users.then(function(dataUsers) {
    

    for (var i = 0; i < dataUsers.length; i++) {
      var elem = dataUsers[i];
      elem.element(by.css('[ng-bind="user.name"]')).getText().then(function(value) {
        if (value === 'Yan') {
          expect(elem.element(by.css('[ng-bind="user.name"]')).getText()).toBe('Yan');
        }

      });
    }
 });
    
  
});


 it('should rename first user',function() {

    element(by.css('body > div > ol > li:nth-child(1) > div > button:nth-child(1)')).click().then(function(){
    element(by.model('name')).sendKeys("bnm");
    element(by.buttonText('Submit')).click();
    expect(element(by.css('body > div > ol > li:nth-child(1) > p > i')).getText()).toBe('Kolyabnm');

  });


 });


 

});

