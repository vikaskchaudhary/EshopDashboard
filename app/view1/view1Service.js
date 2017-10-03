var loginApp = angular.module('loginFact',[])
    .factory('loginSvcFact',['$http',function($http){

        var loginFact={};
        loginFact.methodD = function(email){
            alert(email);
        }

        return loginFact;
    }]);