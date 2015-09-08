(function(){
  var router = angular.module('grumbleRouter', []);

  router.config([
    '$routeProvider',
    function($routeProvider){
      $routeProvider.
      when("/grumbles", {
        templateUrl: 'js/views/grumbles/index.html',
        controller: 'grumblesController',
        controllerAs: 'grumblesCtrl'
      })
    }
  ])

})();
