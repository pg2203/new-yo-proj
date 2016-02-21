/* global module, browser, element, by */

'use strict';

var MainPage = function() {

  this.get = function (url) {
    browser.get(url);
  };

  this.waitForAngular = function () {
    browser.waitForAngular();
  };

  this.email = element(by.id('email'));
  this.password = element(by.id('password'));
  this.submitBtn = element(by.id('submitBtn'));

};

module.exports = new MainPage();
