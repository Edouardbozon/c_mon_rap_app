export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'navbar',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (AuthService) {
    'ngInject';
    this.AuthService = AuthService;
  }
  disconnect(){
      this.AuthService.disconnect();
  }
}
