export class MainController {
    constructor (Facebook, $rootScope, MainService, $log) {
        'ngInject';

        this.Facebook = Facebook;
        this.$rootScope = $rootScope;
        this.MainService = MainService;
        this.$log = $log;

        $rootScope.user = {};
        $rootScope.user.isConnected = false;
        $rootScope.user.fbToken = undefined;

    }

    logFacebook(){
        if(this.$rootScope.user.isConnected === false){
            this.MainService
            .logFacebook()
            .then((response)=>{
                if(response.status === 'connected'){
                    this.getUserId();

                    this.$rootScope.user.fbToken = response.authResponse.accessToken;
                    this.$rootScope.user.isConnected = true;
                }
            });
        }
    }

    getUserId(){
        this.MainService
        .getUserId()
        .then((response)=>{
            this.$rootScope.user.id = response.id;
            this.$rootScope.user.name = response.name;
            this.getProfilePicture();
        });
    }

    getProfilePicture(){
        this.MainService
        .getProfilePicture()
        .then((response)=>{
            this.$rootScope.user.picture = response.data.url;
        });
    }

    logTinder(){
        this.MainService.authTinder().then((response)=>{
            this.$log(response);
        })
    }
}
