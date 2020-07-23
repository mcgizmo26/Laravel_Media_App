angular.module('app')
    .controller('homeCtrl', function($scope, $location, homeSrvc){
        $scope.userWelcome = homeSrvc.getWelcome();

        $scope.logout = function(){
            homeSrvc.logout();
            $location.path("/");
        }
    });