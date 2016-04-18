export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/auth/auth.html',
      controller: 'AuthController',
      controllerAs: 'auth'
    })
    .when('/profile', {
      templateUrl: 'app/profile/profile.html',
      controller: 'ProfileController',
      controllerAs: 'profile',
      resolve: {
          checkIsConnected: function(AuthService){
              console.log('test');
              return AuthService.checkIsConnected();
          }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}
