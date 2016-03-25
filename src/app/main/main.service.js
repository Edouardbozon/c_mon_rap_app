export class MainService {
    constructor($http, $rootScope, Facebook, $q){
        'ngInject';

        this.$rootScope = $rootScope;
        this.$http = $http;
        this.Facebook = Facebook;
        this.$q = $q;

        this.tinderUrl = 'https://api.gotinder.com';

    }

    authTinder(){
        // const url = this.tinderUrl + '/auth';
        const url = '/api';
        const data = {
            // facebook_token: this.$rootScope.user.fbToken,
            facebook_token: 'CAAGm0PX4ZCpsBALcnVTEI59OovtfpYxW7NCfyuGnRCFfJF0XzmWFZBnz9JFwVbbQWVDCziyZC7PhoJlcnSFUDs7ZC0MrjJRQTZAFgFh6RXPl9zHt8KdiK9aesyCfPgh8cOZCEKXvsY3jdkscc9lNwy4uZCoZCVGa5V1FoeTyUVZAeZCuDzXs3fAnFHtgler1JTygLZCqy0CycTmwAZDZD',
            facebook_id: this.$rootScope.user.id
        };
        const headers = {
            'Content-type': 'application/json',
            'User-agent': 'User-Agent: Tinder/3.0.4 (iPhone; iOS 7.1; Scale/2.00)'
        };
        return this.$http.post(url, data, headers);
    }

    logFacebook(){
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

    getUserId(){
        const defer = this.$q.defer();
        this.Facebook.api('/me', (response) => {
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

}
