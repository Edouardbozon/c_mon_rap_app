export class MainController {
    constructor (Facebook, $rootScope, MainService, $log) {
        'ngInject';

        this.Facebook = Facebook;
        this.$rootScope = $rootScope;
        this.MainService = MainService;
        this.$log = $log;

        $rootScope.isConnected = false;
        $rootScope.fbToken = '';
        $rootScope.user = {};

    }

    logFacebook(){
        this.Facebook.login((response)=> {
            if(response.status === 'connected'){
                this.$rootScope.isConnected = true;
                this.$rootScope.fbToken = response.authResponse.accessToken;
                this.getUserId();
            }
        });
    }

    getUserId(){
        this.Facebook.api('/me', (response)=> {
            this.$rootScope.user = response;
        });
    }

    logTinder(){
        this.MainService.authTinder().then((response)=>{
            angular.$log(response);
        })
    }
}
