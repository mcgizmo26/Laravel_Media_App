interface UserLogin {
    firstname?: string,
    lastname?: string,
    email: string,
    password: string
};

angular.module('app')
    .controller('loginCtrl', function ($scope, $location, loginSrvc) {
        const loginForm: HTMLElement = document.getElementById('loginForm');
        loginForm.style.maxHeight = "30%";

        $scope.showLoginComponent = true;
        $scope.showSignupComponent = false;
        $scope.errorMessage = "";
        $scope.errorExists = false;

        // New Method **********************************************
        $scope.toggleView = () => {
            if($scope.showLoginComponent === true){
                $scope.showLoginComponent = false
                $scope.showSignupComponent = true;
                loginForm.style.maxHeight = "55%";
            } else {
                $scope.showLoginComponent = true;
                $scope.showSignupComponent = false;
                loginForm.style.maxHeight = "30%";
            }
        }

        // New Method **********************************************
        $scope.createUserInstance = (user: UserLogin) => {
            loginSrvc.createUserInstance(user).then((res: any) => {
                if(res.status === 201){
                    $location.path('/app');
                } else {
                    $scope.errorExists = true;
                    $scope.errorMessage = "There was an error";
                }
            })
        };

        // New Method **********************************************
        $scope.login = (user: UserLogin) => {
            loginSrvc.login(user).then( (res: any) => {
                if(res.status === 201){
                    $location.path('/app');
                } else if(res.status === 403) {
                    $scope.errorExists = true;
                    $scope.errorMessage = res.data;
                } else {
                    $scope.errorExists = true;
                    $scope.errorMessage = "There was an error";
                }
            });
        };
    });