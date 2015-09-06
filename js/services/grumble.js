(function() {
  var grumbleServices = angular.module('grumbleServices', ['ngResource']);
  grumbleServices.factory('Grumble', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:id', {}, {
      update: {method:'PUT'}
    });
  }]);
  grumbleServices.factory('Comment', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:grumbleId/comments/:id', {}, {
      update: {method:'PUT'}
    });
  }]);
})();
