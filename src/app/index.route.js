export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/auth/auth.html',
      controller: 'AuthController',
      controllerAs: 'auth'
    })
    .when('/dashboard', {
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard',
      resolve: {
          checkIsConnected: function(AuthService){
              return AuthService.checkIsConnected();
          }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}
