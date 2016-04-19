export class DashboardController {
    constructor (Facebook, $rootScope, DashboardService, $log, LoaderService) {
        'ngInject';

        this.Facebook = Facebook;
        this.$rootScope = $rootScope;
        this.LoaderService = LoaderService;
        this.DashboardService = DashboardService;
        this.$log = $log;
        this.posts = [];

        this.getUserPosts();

    }

    getUserPosts(){
        this.LoaderService.add(1);
        this.DashboardService
        .getUserPosts()
        .then((response) => {
            this.posts = response.posts.data;
            this.$log.info(this.posts);
            this.LoaderService.remove(4);
        }).catch((error) => {
            this.$log.error('XHR Failed to get DashboardController posts from Facebook API.\n' + angular.toJson(error.data, true));
        });
    }

}
