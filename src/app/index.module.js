import { config } from './index.config';
import { routerConfig } from './index.route';
import { AuthController } from './auth/auth.controller';
import { ProfileController } from './profile/profile.controller';
import { AuthService } from '../app/auth/auth.service';
import { ProfileService } from '../app/profile/profile.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('facebook-dashboard', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ngMaterial', 'toastr', 'facebook'])
  .config(config)
  .config(routerConfig)
  .service('AuthService', AuthService)
  .service('ProfileService', ProfileService)
  .controller('AuthController', AuthController)
  .controller('ProfileController', ProfileController)
  .directive('navbar', NavbarDirective);
