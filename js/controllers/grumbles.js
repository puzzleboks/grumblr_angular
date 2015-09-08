(function() {
  app = angular.module('grumbleControllers',[]);

  app.controller('grumbleController', ['Grumble', '$routeParams', '$location', function(Grumble, $routeParams, $location) {
    this.grumble = Grumble.get({id: $routeParams.id});
    this.delete = function() {
      Grumble.delete({id: $routeParams.id}, function() {
        $location.path('/grumbles');
      });
    }
  }])

  app.controller('newGrumbleController', ['Grumble', '$location', function(Grumble, $location) {
    this.create = function() {
      Grumble.save(this.grumble, function() {
        $location.path('/grumbles');
      });
    }
  }])

  app.controller('editGrumbleController', ['Grumble', '$routeParams', '$location', function(Grumble, $routeParams, $location) {
    this.grumble = Grumble.get({id: $routeParams.id});
    this.update = function() {
      var self = this;
      this.grumble.$update({id: this.grumble.id}, function() {
        $location.path('/grumbles/' + self.grumble.id);
      });
    }
  }])


  app.controller('grumblesController', ['Grumble', function(Grumble) {
    this.grumbles = Grumble.query();
  }]);

  app.controller( 'commentsController', function(){
    this.create = function( grumble ){
      grumble.comments.unshift({
        content: grumble.newCommentContent
      });
      grumble.newCommentContent = "";
    }
  })
})();
