export class LoaderService {
  constructor($rootScope) {
    'ngInject';

    this.$rootScope = $rootScope;

  }

  add(nbr) {
    this.$rootScope.$broadcast('Loader:add', nbr);
  }

  remove(nbr) {
    this.$rootScope.$broadcast('Loader:rm', nbr);
  }

}
