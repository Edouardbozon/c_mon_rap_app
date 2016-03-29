export class ProfileController {
    constructor (Facebook, $rootScope, ProfileService, $log) {
        'ngInject';

        this.Facebook = Facebook;
        this.$rootScope = $rootScope;
        this.ProfileService = ProfileService;
        this.$log = $log;

    }

    getUserPhotos(){
        this.ProfileService
        .getUserPhotos()
        .then((response) => {
            this.$log.info(response);
        }).catch((error) => {
            this.$log.error('XHR Failed to get profile photos from Facebook API.\n' + angular.toJson(error.data, true));
        });
    }

}
