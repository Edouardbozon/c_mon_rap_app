export class DashboardController {
    constructor (Facebook, $rootScope, DashboardService, $log, LoaderService) {
        'ngInject';

        this.Facebook = Facebook;
        this.$rootScope = $rootScope;
        this.LoaderService = LoaderService;
        this.DashboardService = DashboardService;
        this.$log = $log;
        this.infos = [];

        this.getUserPhotos();

    }

    getUserPhotos(){
        this.LoaderService.add(1);
        this.DashboardService
        .getUserPhotos()
        .then((response) => {
            this.infos = response.photos.data;
            this.$log.info(this.infos);
            this.LoaderService.remove(4);
        }).catch((error) => {
            this.$log.error('XHR Failed to get DashboardController photos from Facebook API.\n' + angular.toJson(error.data, true));
        });
    }

}
