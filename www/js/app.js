// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic',
  'starter.controllers'
  ],function ($httpProvider) {
    //
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript, */*; q=0.01';
    $httpProvider.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function (data) {
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
})

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('login',{
    url: '/login',
    templateUrl: 'template/login.html',
    controller: 'LoginCtrl'
  })
  .state('register',{
    url: '/register',
    templateUrl: 'template/register.html',
    controller: 'RegisterCtrl'
  })
      .state('show', {
        url: '/show',
        templateUrl: 'template/show.html',
        controller: 'ShowCtrl'
      })
  ;
  //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  $urlRouterProvider.otherwise('/login');
})