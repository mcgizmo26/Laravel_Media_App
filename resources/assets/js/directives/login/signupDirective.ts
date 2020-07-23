angular.module('app')
    .directive('signup', () => {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../../../templates/components/signup.html'
        }
    })