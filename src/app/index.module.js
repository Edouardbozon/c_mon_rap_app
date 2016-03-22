/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';
import { UsersController } from './users/users.controller';
import { MatchesController } from './matches/matches.controller';
import { MessagesController } from './messages/messages.controller';
import { ProfileController } from './profile/profile.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('tinder-web-app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ngMaterial', 'toastr', 'facebook'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('UsersController', UsersController)
  .controller('MatchesController', MatchesController)
  .controller('MessagesController', MessagesController)
  .controller('ProfileController', ProfileController)
  .directive('navbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
