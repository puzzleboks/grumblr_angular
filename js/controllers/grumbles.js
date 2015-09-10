(function() {
  app = angular.module('grumbleControllers',[]);
  app.controller('grumblesController', ['Grumble', function(Grumble) {
    this.grumbles = Grumble.query()
    var self = this
    this.delete = function(id){
      Grumble.delete({id: id}, function(){
        self.grumbles = Grumble.query()
      })
    }
    this.reset = function(){
      this.title = ""
      this.authorName = ""
      this.content = ""
      this.photoUrl = ""
    }
    this.create = function(){
      var grumble = {
        title: this.title,
        authorName: this.authorName,
        content: this.content,
        photoUrl: this.photoUrl
      }
      Grumble.save(grumble)
    }
    this.edit = function(index){
      var grumble = this.grumbles[index]
      this.title = grumble.title
      this.authorName = grumble.authorName
      this.photoUrl = grumble.photoUrl
      this.content = grumble.content
    }
    this.update = function(index){
      var grumble = this.grumbles[index]
      grumble.title = this.title
      grumble.authorName = this.authorName
      grumble.photoUrl = this.photoUrl
      grumble.content = this.content
    }
    this.formIsVisible = false
    this.showGrumble = true
    this.toggleForm = function(){
      this.formIsVisible = this.formIsVisible ? false : true
    }
  }]);

  app.controller( 'grumbleController', ['$routeParams', 'Grumble', '$location', function($routeParams, Grumble, $location){
    this.grumble = Grumble.get({id: $routeParams.id})
    this.delete = function(){
      Grumble.remove({id: this.grumble.id}, function(){
        $location.path("/grumbles")
      })
    }
  }])

  app.controller('newGrumbleController', ['Grumble', '$location', function(Grumble, $location){
    this.create = function(){
      var self = this
      Grumble.save(this.grumble, function(grumble){
        $location.path("/grumbles/" + grumble.id)
      })
    }
  }])

  app.controller('editGrumbleController', ['$routeParams', 'Grumble', '$location', function($routeParams, Grumble, $location){
    this.grumble = Grumble.get({id: $routeParams.id})
    this.edit = function(){
      this.grumble.$update({id: this.grumble.id});
      $location.path("/grumbles/" + this.grumble.id)

      // var self = this
      // Grumble.update({id: this.grumble.id}, this.grumble, function(){
      //   $location.path("/grumbles/" + self.id)
      // })
    }
  }])
})();
