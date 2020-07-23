import './bootstrap';

const app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: "templates/views/login.html",
			controller: "loginCtrl"
		})
		.when('/app', {
			templateUrl: "templates/views/home.html",
			controller: "homeCtrl"
		});

	$routeProvider.otherwise('/');

	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false
	// });

});


// Used to determine if user is authenticated and can use the routes
app.run(function ($rootScope, $location, loginSrvc) {
	$rootScope.$on("$routeChangeStart", function (event, next, current) {
		if (!loginSrvc.getAuthStatus()) {
			$location.path('/');
		}

		if (next.$$route.originalPath == '/') {
			if (loginSrvc.getAuthStatus()) {
				$location.path(current.$$route.originalPath);
			}
		}
	})
})