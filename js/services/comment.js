(function() {
  var grumbleServices = angular.module('commentServices', ['ngResource']);

  grumbleServices.factory('Comment', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:grumble_id/comments/:id');
  }]);
})();
