export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/users', {
      templateUrl: 'app/users/users.html',
      controller: 'UsersController',
      controllerAs: 'users'
    })
    .when('/matches', {
      templateUrl: 'app/matches/matches.html',
      controller: 'MatchesController',
      controllerAs: 'matches'
    })
    .when('/messages', {
      templateUrl: 'app/messages/messages.html',
      controller: 'MessagesController',
      controllerAs: 'messages'
    })
    .when('/profile', {
      templateUrl: 'app/profile/profile.html',
      controller: 'ProfileController',
      controllerAs: 'profile'
    })
    .otherwise({
      redirectTo: '/'
    });
}
