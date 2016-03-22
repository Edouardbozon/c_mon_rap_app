export class MainController {
    constructor (Facebook, $rootScope) {
        'ngInject';

        this.Facebook = Facebook;
        this.$rootScope = $rootScope;

        $rootScope.isConnected = false;
        $rootScope.user = {};

    }

    log(){
        this.Facebook.login((response)=> {
            if(response.status === 'connected' && this.$rootScope.isConnected === false){
                this.$rootScope.isConnected = true;
                this.me();
            }
        });
    }

    me() {
        this.Facebook.api('/me', (response)=> {
            this.$rootScope.user = response;
        });
    };

}
