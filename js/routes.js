(function(){
 var router = angular.module('grumbleRoutes', []);
 router.config(['$routeProvider', function($routeProvider){
   $routeProvider.when("/grumbles",{
     templateUrl: 'js/views/grumbles/index.html',
     controller: 'grumblesController',
     controllerAs: 'grumblesCtrl'
   }).when("/grumbles/new",{
     templateUrl: 'js/views/grumbles/new.html',
     controller: 'newGrumbleController',
     controllerAs: 'newGrumbleCtrl'
   }).when("/grumbles/:id",{
     templateUrl: 'js/views/grumbles/show.html',
     controller: 'grumbleController',
     controllerAs: 'grumbleCtrl'
   }).when("/grumbles/:id/edit",{
     templateUrl: 'js/views/grumbles/edit.html',
     controller: 'editGrumbleController',
     controllerAs: 'editGrumbleCtrl'
   }).
   otherwise({
     redirectTo: "/grumbles"
   })
 }]);
})();
