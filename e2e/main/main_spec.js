/* global require, browser, describe, beforeEach, it, fit, expect */
'use strict';

describe ('#Main', function () {

  var page = require('./main_page');

  beforeEach(function(){
    page.get('#/main');
    page.waitForAngular();
  });

  describe('#Main Page', function() {
    it('redirects to main welcome page', function() {
      expect(browser.getCurrentUrl()).toMatch('/main');
    });

    it('has a Sign In button page', function() {
      expect(page.submitBtn.isElementPresent).toBeTruthy();
    });
  });


});
