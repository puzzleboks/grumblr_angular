(function(){
  var router = angular.module('grumbleRouter', []);
  router.config([
    '$routeProvider',
    function($routeProvider){
      $routeProvider.
      when("/grumbles", {
        templateUrl: 'views/grumbles/index.html',
        controller: 'grumblesController',
        controllerAs: 'grumblesCtrl'
      }).
      when("/grumbles/new", {
        templateUrl: 'views/grumbles/new.html',
        controller: 'newGrumbleController',
        controllerAs: 'newGrumbleCtrl'
      }).
      when("/grumbles/:id", {
        templateUrl: 'views/grumbles/show.html',
        controller: 'grumbleController',
        controllerAs: 'grumbleCtrl'
      }).
      when("/grumbles/:id/edit", {
        templateUrl: 'views/grumbles/edit.html',
        controller: 'editGrumbleController',
        controllerAs: 'grumbleCtrl'
      }).
      otherwise({
        redirectTo: "/grumbles"
      })
    }
  ])


})();
