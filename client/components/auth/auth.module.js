'use strict';

angular.module('bootcampUiApp.auth', ['bootcampUiApp.constants', 'bootcampUiApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
