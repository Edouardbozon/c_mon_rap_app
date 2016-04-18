export class DashboardController {
    constructor (Facebook, $rootScope, DashboardService, $log) {
        'ngInject';

        this.Facebook = Facebook;
        this.$rootScope = $rootScope;
        this.DashboardService = DashboardService;
        this.$log = $log;
        this.infos = [];

        this.getUserPhotos();

    }

    getUserPhotos(){
        this.DashboardService
        .getUserPhotos()
        .then((response) => {
            this.infos = response.photos.data;
            this.$log.info(this.infos);
        }).catch((error) => {
            this.$log.error('XHR Failed to get DashboardController photos from Facebook API.\n' + angular.toJson(error.data, true));
        });
    }

}
