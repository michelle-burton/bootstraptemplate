

/** @ngInject */
export default function routesConfig(
  $stateProvider: angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider,
  $locationProvider: angular.ILocationProvider
) {

  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app',
      data: {
        unsecure: true
      }
    })
}