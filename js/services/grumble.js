(function() {
  var firebaseUrl = "https://wdi-grumbler-lwp.firebaseio.com";
  var connectedRef = new Firebase(firebaseUrl + "/.info/connected");
  connectedRef.on("value", function(snapshot) {
    if (snapshot.val() === true) {
      console.log("Connected to firebase:", firebaseUrl);
    } else {
      console.log("Not connected to firebase:", firebaseUrl);
    }
  });
  var grumbleServices = angular.module('grumbleServices', ['ngResource', 'firebase']);

  grumbleServices.factory('Grumble', ['$firebaseObject','$firebaseArray', grumbleFirebase]);
  // Manages resources in firebase
  // mirrors ngResource interface
  function grumbleFirebase($firebaseObject, $firebaseArray) {
    // get reference to grumbles "namespace"
    var grumblesRef = new Firebase(firebaseUrl + "/grumbles");
    // retrieve our grumbles
    var grumbles = $firebaseArray(grumblesRef);
    // mirror ngResource interface
    var Grumble = {
      query: function(){ return grumbles; },
      save: function( grumble, callback ){
        // persist our grumble
        grumbles.$add(grumble).then(function(ref) {
          grumble.$id = ref.key();
          // and pass the saved grumble back
          callback(grumble);
        });
      },
      get: function (grumble, callback) {
        // var found = $firebaseObject(grumblesRef.child(grumble.$id));
        var found = $firebaseObject(grumblesRef.child(grumble.$id));
        // support optional callback
        if(typeof callback == "function") {
          callback(found);
        }
        return found;
      },
      delete: function(grumble, cb){
        return grumbles.$remove(grumbles.$getRecord(grumble.$id));
      }
    };
    return Grumble;
  };

  grumbleServices.factory('Comment', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:grumbleId/comments/:id', {}, {
      update: {method:'PUT'}
    });
  }]);
})();
