(function() {
  app = angular.module('grumbleControllers',[]);

  app.controller('grumbleController', ['Grumble', 'Comment', '$routeParams', '$location', showGrumble]);
  app.controller('newGrumbleController', ['Grumble', '$location', newGrumble]);
  app.controller('editGrumbleController', ['Grumble', '$routeParams', '$location', editGrumble ]);
  app.controller('grumblesController', ['Grumble', indexGrumbles]);

  app.controller( 'commentsController', function(){
    this.create = function( grumble ){
      grumble.comments.unshift({
        content: grumble.newCommentContent
      });
      grumble.newCommentContent = "";
    };
  });
})();


function showGrumble(Grumble, Comment, $routeParams, $location) {
  this.grumble = Grumble.get({id: $routeParams.id}, function(grumble) {
    grumble.comments = Comment.query({grumble_id: grumble.id});
  });
  this.delete = function() {
    Grumble.delete({id: $routeParams.id}, function() {
      $location.path('/grumbles');
    });
  };
}

function newGrumble(Grumble, $location) {
  this.create = function() {
    Grumble.save(this.grumble, function() {
      $location.path('/grumbles');
    });
  };
}

function editGrumble(Grumble, $routeParams, $location) {
  this.grumble = Grumble.get({id: $routeParams.id});
  this.update = function() {
    var self = this;
    this.grumble.$update({id: this.grumble.id}, function() {
      $location.path('/grumbles/' + self.grumble.id);
    });
  };
}

function indexGrumbles(Grumble) {
  this.grumbles = Grumble.query();
}
