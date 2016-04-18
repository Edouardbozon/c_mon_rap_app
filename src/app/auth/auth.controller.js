export class AuthController {
    constructor (Facebook, $rootScope, AuthService, $log, $location) {
        'ngInject';

        this.Facebook = Facebook;
        this.$rootScope = $rootScope;
        this.AuthService = AuthService;
        this.$location = $location;
        this.$log = $log;

        $rootScope.user = {
            id: undefined,
            name: undefined,
            fbAuthToken: undefined,
            isConnected: false,
            picture: undefined
        };
    }

    logFacebook(){
        this.AuthService
        .facebookAuth()
        .then((response) => {
            this.$rootScope.user.fbAuthToken = response.authResponse.accessToken;
            this.$rootScope.user.id = response.authResponse.userID;
            this.$rootScope.user.isConnected = true;
        })
        .then(() => {
            this.getProfilePicture();
        })
        .then(() => {
            this.getProfileUser();
        })
        .finally(() => {
            this.$location.path('/dashboard');
        })
        .catch((error) => {
            this.$log.error(angular.toJson(error.data, true));
        });
    }

    getProfilePicture(){
        this.AuthService
        .getProfilePicture()
        .then((response) => {
            this.$rootScope.user.picture = response.data.url;
        }).catch((error) => {
            this.$log.error('XHR Failed to get profile picture from Facebook API.\n' + angular.toJson(error.data, true));
        });
    }

    getProfileUser(){
        this.AuthService
        .getProfileUser()
        .then((response) => {
            this.$rootScope.user.name = response.name;
        }).catch((error) => {
            this.$log.error('XHR Failed to get profile user from Facebook API.\n' + angular.toJson(error.data, true));
        });
    }

}
