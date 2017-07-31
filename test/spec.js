describe('slow users', function() {
  beforeEach(function() {
    browser.get('http://localhost:3457');
  });



  describe('list count', function() {
   

    it('should start out with an empty memory', function () {
      var users =
          element.all(by.repeater('user in usersList'));

      expect(users.count()).toEqual(5);
    });


  });
});
