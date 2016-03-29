import { config } from './index.config';
import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';
import { UsersController } from './users/users.controller';
import { MatchesController } from './matches/matches.controller';
import { MessagesController } from './messages/messages.controller';
import { ProfileController } from './profile/profile.controller';
import { MainService } from '../app/main/main.service';
import { ProfileService } from '../app/profile/profile.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('tinder-web-app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ngMaterial', 'toastr', 'facebook'])
  .config(config)
  .config(routerConfig)
  .service('MainService', MainService)
  .service('ProfileService', ProfileService)
  .controller('MainController', MainController)
  .controller('UsersController', UsersController)
  .controller('MatchesController', MatchesController)
  .controller('MessagesController', MessagesController)
  .controller('ProfileController', ProfileController)
  .directive('navbar', NavbarDirective);
