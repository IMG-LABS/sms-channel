'use strict';

/**
 * @ngdoc overview
 * @name smsChannelApp
 * @description
 * # smsChannelApp
 *
 * Main module of the application.
 */
var app = angular.module('smsChannelApp', [
  'ngAnimate',
  'ngSanitize',
  'ngTouch',
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: '/login/',
      controller: 'LoginCtrl',
      templateUrl: 'views/pages/login.html',
    });
  });
