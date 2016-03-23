export function config ($logProvider, toastrConfig, FacebookProvider, $mdThemingProvider) {
    'ngInject';

    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // Facebook config
    const appId = '120262645036225';
    FacebookProvider.init(appId);

    // Theming
    $mdThemingProvider.theme('default').accentPalette('amber');

}
