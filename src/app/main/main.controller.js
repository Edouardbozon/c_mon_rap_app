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
            fbToken: undefined,
            isConnected: false
        };
    }

    logFacebook(){
        this.MainService
        .logFacebook()
        .then((response) => {
            this.getUserId();
            this.$rootScope.user.fbToken = response.authResponse.accessToken;
            this.$rootScope.user.isConnected = true;
        })
        .catch((error) => {
            this.$log.error('XHR Failed to log in Facebook API.\n' + angular.toJson(error.data, true));
        });
    }

    logTinder(){
        this.MainService
        .authTinder()
        .then((response) => {
            this.$log(response.data);
            // console.log(response.data);
        })
        .catch((error) => {
            this.$log.error('XHR Failed to log in Tinder API.\n' + angular.toJson(error.data, true));
        });
    }

    getUserId(){
        this.MainService
        .getUserId()
        .then((response) => {
            this.$rootScope.user.id = response.id;
            this.$rootScope.user.name = response.name;
            this.getProfilePicture();
            this.logTinder();
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
