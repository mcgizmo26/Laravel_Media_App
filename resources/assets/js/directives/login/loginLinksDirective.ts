angular.module('app')
    .directive('loginLinks', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../../../templates/components/loginLinks.html'
        }
    });