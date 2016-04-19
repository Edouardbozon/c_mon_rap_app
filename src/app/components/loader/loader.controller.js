export class LoaderController {
    constructor(LoaderService, $rootScope, $scope, $log){
        'ngInject';

        this.LoaderService = LoaderService;
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$log = $log;
        this.loadingQueue = 0;

        const loaderAdd = $rootScope.$on('Loader:add', (evt, data) => {
            if(data && data > 0){
                this.$log.info(evt.name, this.loadingQueue);
                this.loadingQueue += data;
            }
        });

        const loaderRm = $rootScope.$on('Loader:rm', (evt, data) => {
            if(data && data > 0){
                this.$log.info(evt.name, this.loadingQueue);
                this.loadingQueue -= data;
            }
        });

        $scope.$on('$destroy', () => {
            loaderAdd.$destroy();
            loaderRm.$destroy();
            this.loadingQueue = 0;
        });

    }

}
