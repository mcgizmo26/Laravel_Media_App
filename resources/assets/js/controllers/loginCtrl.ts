interface UserLogin {
    firstname?: string,
    lastname?: string,
    email: string,
    password: string
};

console.log("Login Controller script loaded again and again");

angular.module('app')
    .controller('loginCtrl', function ($scope, $location, loginSrvc) {
        const loginForm: HTMLElement = document.getElementById('loginForm');
        $scope.currentPath = $location.path();
        $scope.errorExists = false;
        $scope.errorMessage = "";

        if ($scope.currentPath === "/") {
            loginForm.style.maxHeight = "30%";
        } else {
            loginForm.style.maxHeight = "55%";
        };

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