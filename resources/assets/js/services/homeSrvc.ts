angular.module('app')
    .service('homeSrvc', function($cookies: any){
        const user = JSON.parse($cookies.get('auth'));

        this.getWelcome = function(){
            return `Welcome ${user.firstname} ${user.lastname}`;
        };

        this.logout = function(){
            $cookies.remove('auth');
        }
    })