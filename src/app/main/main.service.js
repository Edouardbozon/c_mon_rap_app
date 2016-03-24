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
        const url = this.tinderUrl + '/auth';
        const data = {
            facebook_token: this.$rootScope.user.fbToken,
            facebook_id: this.$rootScope.user.id
        };
        const headers = {
            'Content-type': 'application/json',
            'User-agent': 'User-Agent: Tinder/3.0.4 (iPhone; iOS 7.1; Scale/2.00)'
        };
        return this.$http.post(url, data, headers);
    }

    logTinder(){
        return this.MainService.authTinder();
    }

    logFacebook(){
        let defer = this.$q.defer();
        this.Facebook.login((response)=>{
            if(response && !response.error){
                defer.resolve(response);
            } else {
                defer.reject(response.error);
            }
        });
        return defer.promise;
    }

    getUserId(){
        let defer = this.$q.defer();
        this.Facebook.api('/me', (response)=>{
            if(response && !response.error){
                defer.resolve(response);
            } else {
                defer.reject(response.error);
            }
        });
        return defer.promise;
    }

    getProfilePicture(){
        let defer = this.$q.defer();
        const url = this.$rootScope.user.id + '/picture';
        console.log(url);
        const params = { redirect: 0, type: 'small' };
        this.Facebook.api(url, params ,(response)=>{
            if(response && !response.error){
                defer.resolve(response);
                console.log(response);
            } else {
                defer.reject(response.error);
            }
        });
        return defer.promise;
    }

}
