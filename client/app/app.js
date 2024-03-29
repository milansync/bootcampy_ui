'use strict';

angular.module('bootcampUiApp', ['bootcampUiApp.auth', 'bootcampUiApp.admin',
    'bootcampUiApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
