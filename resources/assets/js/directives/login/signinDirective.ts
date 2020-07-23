angular.module('app')
    .directive('signin', () => {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../../../templates/components/signin.html'
        }
    });