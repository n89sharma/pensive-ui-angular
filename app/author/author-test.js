'use strict';

describe('myApp.author module', function() {

  beforeEach(module('myApp.author'));

  describe('Author controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('authorCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});