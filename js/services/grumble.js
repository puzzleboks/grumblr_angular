(function() {
  var grumbleServices = angular.module('grumbleServices', ['ngResource']);
  grumbleServices.factory('Grumble', ['$firebaseObject','$firebaseArray', function($firebaseObject, $firebaseArray) {
    var ref = new Firebase('https://grumblr-angular.firebaseio.com/grumbles')
    var grumbles = $firebaseArray(ref)
    var Grumble = {
      all: grumbles,
      save: function( grumble, cb ){
        grumbles.$add(grumble).then(function(ref) {
	  var id = ref.key();
	  cb(id)
	})
      },
      get: function (grumble, cb) {
	var found = $firebaseObject(ref.child(grumble.id));
	if(typeof cb == "function") cb(found)
        return found
      },
      delete: function(grumble, cb){
	return grumbles.$remove(grumbles.$getRecord(grumble.id)) 
      }
    }
    return Grumble
  }]);
  grumbleServices.factory('Comment', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:grumbleId/comments/:id', {}, {
      update: {method:'PUT'}
    });
  }]);
})();
