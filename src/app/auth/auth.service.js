export class AuthService {
    constructor($http, $rootScope, Facebook, $q, $location){
        'ngInject';

        this.$rootScope = $rootScope;
        this.$http = $http;
        this.Facebook = Facebook;
        this.$q = $q;
        this.$location = $location;

    }

    facebookAuth(){
        const defer = this.$q.defer();
        this.Facebook.getLoginStatus((response) => {
            if(!response.error && response.status === 'connected'){
                defer.resolve(response);
            } else {
                this.Facebook.login((response) => {
                    if(response && !response.error){
                        defer.resolve(response);
                    } else {
                        defer.reject(response.error);
                    }
                })
            }
        });
        return defer.promise;
    }

    getProfileUser(){
        const defer = this.$q.defer();
        const userID = this.$rootScope.user.id;
        this.Facebook.api(userID, (response) => {
            if(response && !response.error){
                defer.resolve(response);
            } else {
                defer.reject(response.error);
            }
        });
        return defer.promise;
    }

    getProfilePicture(){
        const defer = this.$q.defer();
        const url = this.$rootScope.user.id + '/picture';
        const params = { redirect: 0, type: 'small' };
        this.Facebook.api(url, params ,(response) => {
            if(response && !response.error){
                defer.resolve(response);
            } else {
                defer.reject(response.error);
            }
        });
        return defer.promise;
    }

    checkIsConnected(){
        if (this.$rootScope.user && this.$rootScope.user.isConnected === true) {
            console.log('connected');
            this.$location.path('/profile');
        } else {
            console.log('redirect to home');
            this.$location.path('/');
        }
    }

}
