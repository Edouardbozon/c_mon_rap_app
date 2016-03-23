export class MainService {
    constructor($http, $rootScope){
        'ngInject';

        this.$rootScope = $rootScope;
        this.$http = $http;

        this.tinderUrl = 'https://api.gotinder.com';
        this.tinderToken = '';
        this.tinderUser = {};

    }

    authTinder(){
        const authUrl = this.tinderUrl + '/auth';
        const authData = {
            facebook_token: this.$rootScope.fbToken,
            facebook_id: this.$rootScope.user.id
        };
        const headerConfig = {
            'Content-type': 'application/json',
            'User-agent': 'User-Agent: Tinder/3.0.4 (iPhone; iOS 7.1; Scale/2.00)'
        };
        return this.$http.post(authUrl, authData, headerConfig);
    }
}
