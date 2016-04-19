export class LoaderController {
    constructor(LoaderService, $rootScope, $scope){
        'ngInject';

        this.LoaderService = LoaderService;
        this.$rootScope = $rootScope;
        this.loadingQueue = 0;

        const loader = $rootScope.$on('Loader:add', (evt, data) => {
            this.loadingQueue = data;
        });

        $scope.on('$destroy', () => loader.$destroy() );

    }

    checkIfLoading(){
        return this.loadingQueue > 0;
    }

}
