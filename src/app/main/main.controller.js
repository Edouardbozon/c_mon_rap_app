export class MainController {
    constructor (Facebook, $rootScope, MainService, $log) {
        'ngInject';

        this.Facebook = Facebook;
        this.$rootScope = $rootScope;
        this.MainService = MainService;
        this.$log = $log;

        $rootScope.user = {
            id: undefined,
            name: undefined,
            isConnected: false,
            fbToken: undefined
        };
    }

    logTinder(){
        this.MainService.authTinder().then((response) => {
            this.$log(response);
        })
    }

    logFacebook(){
        if(this.$rootScope.user.isConnected === false){
            this.MainService
            .logFacebook()
            .then((response) => {
                if(response.status === 'connected'){
                    this.getUserId();

                    this.$rootScope.user.fbToken = response.authResponse.accessToken;
                    this.$rootScope.user.isConnected = true;
                }
            })
            .catch((error) => {
                this.$log.error('XHR Failed to log in Facebook API.\n' + angular.toJson(error.data, true));
            });
        }
    }

    getUserId(){
        this.MainService
        .getUserId()
        .then((response) => {
            this.$rootScope.user.id = response.id;
            this.$rootScope.user.name = response.name;
            this.getProfilePicture();
        }).catch((error) => {
            this.$log.error('XHR Failed to get userID from Facebook API.\n' + angular.toJson(error.data, true));
        });
    }

    getProfilePicture(){
        this.MainService
        .getProfilePicture()
        .then((response) => {
            this.$rootScope.user.picture = response.data.url;
        }).catch((error) => {
            this.$log.error('XHR Failed to get profile picture from Facebook API.\n' + angular.toJson(error.data, true));
        });
    }

}
