/*
'use strict';

angular.module('myApp.view1', [])
   /!* .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])*!/.controller('View1Ctrl',['$scope','$cookies','$window','loginSvcFact',function($scope,$cookies,$window,loginSvcFact) {

     $scope.login = function(){
       loginSvcFact.methodD($scope.loginData.email,$scope.loginData.passwd).then(function(response)
       {
         alert((response.data.access_token));
           $cookies.put('access_token',response.data.access_token);
           $cookies.put('sessionVar',true);
           $scope.sessionActive=true;
           $window.location.href='#view2';
       }, function (error) {
           $cookies.put('sessionVar',false);
           alert(error.data.error);


       });
    }



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
})
;


*/
