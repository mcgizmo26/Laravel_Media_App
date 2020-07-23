interface UserLogin {
    firstname?: string,
    lastname?: string,
    email: string,
    password: string
};

console.log("Login Service script loaded again and updated");

angular.module('app')
    .service("loginSrvc", function($http: any, $cookies: any){

        // New Method **********************************************
        this.createUserInstance = function(user: UserLogin){
            return $http({
                method: 'POST',
                url: 'api/signup',
                data: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    password: user.password
                }
            }).then(function(res: any){
                $cookies.put('auth', res);
                return res;
            }, function(err: any){
                return err;
            });
        };

        // New Method **********************************************
        this.login = function(user: UserLogin){
            return $http({
                method: 'POST',
                url: 'api/login',
                data:{
                    email: user.email,
                    password: user.password
                }
            }).then(function(res: any){
                $cookies.put('auth', JSON.stringify(res.data));
                return res;
            }, function(err: any){
                return err;
            });
        };

        // New Method **********************************************
        this.getAuthStatus = function(){
            const status = $cookies.get('auth');
            if(status){
                return true;
            } else {
                return false;
            }
        }
    });