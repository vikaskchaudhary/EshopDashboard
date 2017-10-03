'use strict';

angular.module('myApp.view2', [])
    .controller('usrCtrl', ['$cookies','$scope','$rootScope','usrSvcFact','$routeParams',function($cookies,$scope,$rootScope,usrSvcFact,$routeParams) {

        $scope.activeTab=$routeParams.activeTabVal;
        $scope.viewUserData={};
        switch($scope.activeTab){
            case 'viewuser':
                viewUser();
                break;
        }
        $scope.saveUsr =function(){
            usrSvcFact.saveUser($scope.usrData).then(function(response){
                alert(response.data.id);
            },function(error){
                alert(error.data.error);
            });
        }

        function viewUser(){
            usrSvcFact.getAllUser().then(function(response){
                $scope.viewUserData= response.data;
            },function(error){
                $scope.viewUserData={};
            });
        }
      /*  $scope.keyPress = function(keyEvent) {
            alert(keyEvent.key);
            if(keyEvent.key==="F5"){
                $cookies.putObject('refreshPath', $window.location.hash);
                $scope.sessionActive=$cookies.get('sessionVar');
            }
        };*/
}]).factory('usrSvcFact',['$cookies','$http',function($cookies,$http){

    var usrFact={};
    var url='http://localhost:8080/';
    usrFact.saveUser = function(usr){
        $http.defaults.headers.common.Authorization='Bearer '+$cookies.get('access_token');
            return $http.post(url+'createUser',usr);
    };

    usrFact.getAllUser = function(){
        $http.defaults.headers.common.Authorization='Bearer '+$cookies.get('access_token');
        return $http.post(url+'getAlluser');
    };

    return usrFact;
}]).run(function($http,$cookies) {
    $http.defaults.headers.common.Authorization='Bearer '+$cookies.get('access_token');
    $http.defaults.headers.common["content-type"] ="application/Json";
});