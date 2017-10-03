angular.module('appRouter', ['ngRoute']).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'index.html',
            controller: 'mainCtlr',
            resolve: {
                test: function ($route) { $route.current.params.activeTabVal = 'dashboard'; }
            }
        }).when('/createUser', {
        templateUrl : 'view2/userPanel.html',
        controller: 'usrCtrl',
        resolve: {
            test: function ($route) { $route.current.params.activeTabVal = 'createuser'; }
        }
    }).when('/viewUser', {
        templateUrl : 'view2/viewUser.html',
        controller: 'usrCtrl',
        resolve: {
            test: function ($route) { $route.current.params.activeTabVal = 'viewuser'; }
        }
    })/*.when('/view2', {
        templateUrl : 'view2/view2.html',
        controller: 'View2Ctrl',
        resolve: {
            test: function ($route) { $route.current.params.activeTabVal = 2; }
        }
    })*/});