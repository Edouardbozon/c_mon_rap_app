export class AuthService {
    constructor($http, $rootScope, Facebook, $q, $location, LoaderService){
        'ngInject';

        this.$rootScope = $rootScope;
        this.$http = $http;
        this.Facebook = Facebook;
        this.$q = $q;
        this.$location = $location;
        this.LoaderService = LoaderService;

    }

    facebookAuth(){
        const defer = this.$q.defer();
        this.LoaderService.add(1);
        this.Facebook.getLoginStatus((response) => {
            if(!response.error && response.status === 'connected'){
                defer.resolve(response);
            } else {
                this.Facebook.login((response) => {
                    if(response && !response.error){
                        defer.resolve(response);
                    } else {
                        defer.reject(response.error);
                        this.LoaderService.remove(1);
                    }
                })
            }
        });
        return defer.promise;
    }

    getProfileUser(){
        const defer = this.$q.defer();
        const userID = this.$rootScope.user.id;
        this.LoaderService.add(1);
        this.Facebook.api(userID, (response) => {
            if(response && !response.error){
                defer.resolve(response);
            } else {
                defer.reject(response.error);
                this.LoaderService.remove(1);
            }
        });
        return defer.promise;
    }

    getProfilePicture(){
        const defer = this.$q.defer();
        const url = this.$rootScope.user.id + '/picture';
        const params = { redirect: 0, type: 'small' };
        this.LoaderService.add(1);
        this.Facebook.api(url, params ,(response) => {
            if(response && !response.error){
                defer.resolve(response);
            } else {
                defer.reject(response.error);
                this.LoaderService.remove(1);
            }
        });
        return defer.promise;
    }

    checkIsConnected(){
        if (this.$rootScope.user && this.$rootScope.user.isConnected === true) {
            this.$location.path('/dashboard');
        } else {
            this.$location.path('/');
        }
    }

    disconnect(){
        this.$rootScope.user = {
            id: undefined,
            name: undefined,
            fbAuthToken: undefined,
            isConnected: false,
            picture: undefined
        };
        this.$location.path('/');
    }

}
