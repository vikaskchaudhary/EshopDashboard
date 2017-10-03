'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'appRouter',
  'myApp.view2',
  'myApp.version',
    'ngCookies'
]).controller('mainCtrl',['$scope','$cookies','$window','loginSvcFact','$rootScope','$routeChangeStart',function($scope,$cookies,$window,loginSvcFact,$rootScope,$routeChangeStart) {

    $scope.sessionActive=$cookies.get('sessionVar')==undefined || $cookies.get('sessionVar')==null ?false:$cookies.get('sessionVar');

    if( $scope.sessionActive){
        $scope.landingPage='view2/view2.html';
    }
    if($cookies.getObject('refreshPath')==undefined || $cookies.getObject('refreshPath')==null){
        $window.location.href='#dashboard';
    }  else{
        $window.location.href=$cookies.getObject('refreshPath');
       // $cookies.putObject('refreshPath', null);
    }


    $scope.login = function(){
        loginSvcFact.methodD($scope.loginData.email,$scope.loginData.passwd).then(function(response)
        {
            alert((response.data.access_token));
            $cookies.put('access_token',response.data.access_token);
            $cookies.put('sessionVar',true);
            $scope.sessionActive=true;
            $scope.landingPage='view2/view2.html';
           // $window.location.href='#view2';
        }, function (error) {
            $cookies.put('sessionVar',false);
            alert(error.data.error);


        });
    }

    $scope.logOut = function(){
        $scope.sessionActive = false;
        $scope.landingPage='';
        $cookies.remove("sessionVar");
        $cookies.remove("access_token");
        location.reload();
    }


    $scope.keyPress = function(keyEvent,$routeChangeStart) {
        if(keyEvent.key==="F5"){

            $routeChangeStart.preventDefault();
           // window.location.href=$window.location.hash;
          //  $cookies.putObject('refreshPath',$window.location.hash);
           // $scope.sessionActive=$cookies.get('sessionVar');
        }
    };
    /*$scope.sessionActive=$cookies.get('sessionVar');
    if( $scope.sessionActive){
        $scope.landingPage="view2/view2.html"
    }*/
    $scope.$on('$routeChangeStart', function (event, next, current) {
        $scope.sessionActive=$cookies.get('sessionVar');
        $scope.landingPage='view2/view2.html';

    });
    /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        //print here
        $scope.sessionActive=$cookies.get('sessionVar');
        $scope.landingPage="view2/view2.html";
    });*/
}]).factory('loginSvcFact',function($http){

    var loginFact={};
    loginFact.methodD = function(email,passwd){
        var urlAuthenticationBase='http://localhost:8080/oauth/token?grant_type=password&username='+email+'&password='+passwd;
        // console.log(urlAuthenticationBase);
        //alert(urlAuthenticationBase);
        return $http.post(urlAuthenticationBase);
    }

    return loginFact;
}).run(function($http) {
    $http.defaults.headers.common.Authorization = 'Basic YXV0aEFwcDo3NDA5NTRkMC00YjkzLTQ5ZjgtYTllMS1lYjI5NmFiNzRhYzg=';
});
