import { config } from './index.config';
import { routerConfig } from './index.route';
import { AuthController } from './auth/auth.controller';
import { DashboardController } from './dashboard/dashboard.controller';
import { AuthService } from '../app/auth/auth.service';
import { LoaderService } from '../app/components/loader/loader.service';
import { LoaderController } from '../app/components/loader/loader.controller';
import { DashboardService } from '../app/dashboard/dashboard.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('facebook-dashboard', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ngMaterial', 'toastr', 'facebook'])
  .config(config)
  .config(routerConfig)
  .service('AuthService', AuthService)
  .service('LoaderService', LoaderService)
  .service('DashboardService', DashboardService)
  .controller('AuthController', AuthController)
  .controller('LoaderController', LoaderController)
  .controller('DashboardController', DashboardController)
  .directive('navbar', NavbarDirective);
