export class AuthController {
    constructor (Facebook, $rootScope, AuthService, $log, $location, LoaderService) {
        'ngInject';

        this.Facebook = Facebook;
        this.$rootScope = $rootScope;
        this.AuthService = AuthService;
        this.$location = $location;
        this.$log = $log;
        this.LoaderService = LoaderService;

        $rootScope.user = {
            id: undefined,
            name: undefined,
            fbAuthToken: undefined,
            isConnected: false,
            picture: undefined
        };
    }

    logFacebook(){
        this.LoaderService.add(1);
        this.AuthService.facebookAuth()
        .then((response) => {
            this.$rootScope.user.fbAuthToken = response.authResponse.accessToken;
            this.$rootScope.user.id = response.authResponse.userID;
            this.$rootScope.user.isConnected = true;
        })
        .then(() => {
            this.LoaderService.add(1);
            this.getProfilePicture();
        })
        .then(() => {
            this.LoaderService.add(1);
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
