export class MainService {
    constructor($http, $rootScope, Facebook, $q){
        'ngInject';

        this.$rootScope = $rootScope;
        this.$http = $http;
        this.Facebook = Facebook;
        this.$q = $q;

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

    getUserPhotos(){
        const defer = this.$q.defer();
        const url = '/me/photos';
        this.Facebook.api(url, (response) => {
            if(response && !response.error){
                defer.resolve(response);
            } else {
                defer.reject(response.error);
            }
        });
        return defer.promise;
    }

}
