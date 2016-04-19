export class LoaderService {
    constructor($rootScope){
        'ngInject';
        this.$rootScope = $rootScope;
        this.$rootScope.loadingQueue = 0;
    }

    add(nbr){
        this.loadingQueue += 1 || nbr;
        this.$rootScope.$broadcast('Loader:add', this.loadingQueue);
    }

    remove(nbr){
        this.loadingQueue -= 1 || nbr;
        this.$rootScope.$broadcast('Loader:remove', this.loadingQueue);
    }

}
