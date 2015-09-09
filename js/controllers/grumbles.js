(function() {
  angular.module('grumbleControllers', [])
  .controller('grumblesController', function() {
    this.grumbles = [
      { comments: [{ id: 0, content: "I'm a comment #1!" }],
      "id":667,"authorName":"Jesse","content":"Only those who attempt the impossible can achieve the absurd.","title":"29 hipster kanye quotes that people born after 1990 wil never understand","photoUrl":"https://splashbase.s3.amazonaws.com/getrefe/regular/tumblr_n6ni6khmfG1slhhf0o2_1280.jpg","created_at":"2015-09-01T14:10:07.845Z","updated_at":"2015-09-01T14:10:07.845Z"},
      { comments: [{ id: 1, content: "I'm a comment #2!" }],
      "id":668,"authorName":"Adam","content":"Do a bit more for your friends.","title":"8 sweet pokemons","photoUrl":"https://splashbase.s3.amazonaws.com/unsplash/regular/TIDqBLgQw6IUt5ZHKS0f_11891558035_eafdf53bf0_o.jpg%3Ffit%3Dcrop%26fm%3Djpg%26h%3D650%26q%3D75%26w%3D950","created_at":"2015-09-01T14:10:12.922Z","updated_at":"2015-09-01T14:10:12.922Z"},
      { comments: [{ id: 2, content: "I'm a comment #3!" }],
      "id":669,"authorName":"Andy","content":"Don't give a speech. Put on a show.","title":"33 quirky hipchat messages","photoUrl":"https://splashbase.s3.amazonaws.com/moveast/regular/tumblr_nj5o149XaX1tomxvuo3_1280.jpg","created_at":"2015-09-01T14:10:17.685Z","updated_at":"2015-09-01T14:10:17.685Z"},
      { comments: [{ id: 3, content: "I'm a comment #4!" }],
      "id":670,"authorName":"Robin","content":"If you want to be happily married, marry a happy person.","title":"17 TV moms eating sandwiches","photoUrl":"https://splashbase.s3.amazonaws.com/unsplash/regular/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg%3Ffit%3Dcrop%26fm%3Djpg%26h%3D450%26q%3D75%26w%3D950","created_at":"2015-09-01T14:10:19.196Z","updated_at":"2015-09-01T14:10:19.196Z"},
      { comments: [{ id: 4, content: "I'm a comment #5!" }],
      "id":671,"authorName":"Adrian","content":"A nod is as good as a wink to a blind horse.","title":"23 awesome Justin Bieber quotes","photoUrl":"https://splashbase.s3.amazonaws.com/getrefe/regular/tumblr_n0aag1nF9l1slhhf0o1_1280.jpg","created_at":"2015-09-01T14:10:21.749Z","updated_at":"2015-09-01T14:10:21.749Z"},
      { comments: [{ id: 5, content: "I'm a comment #6!" }],
      "id":672,"authorName":"Matt","content":"If you are ever in doubt about whether or not to wash your hair: Wash it.","title":"23 tigers wearing a tux","photoUrl":"https://splashbase.s3.amazonaws.com/snapographic/regular/DSC02132-wpcf_700x400.jpg","created_at":"2015-09-01T14:10:23.771Z","updated_at":"2015-09-01T14:10:23.771Z"}
    ]

    this.delete = function(index){
      this.grumbles.splice(index, 1)
    }

    this.reset = function(){
      this.title = ""
      this.authorName = ""
      this.content = ""
      this.photoUrl = ""
    }

    this.create = function(){
      this.grumbles.unshift({
        title: this.title,
        authorName: this.authorName,
        content: this.content,
        photoUrl: this.photoUrl
      })
      this.reset()
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
      this.reset()
    }
  }).controller('commentsController', function() {

    this.create = function(grumble){
      grumble.comments.unshift({
        content: grumble.newCommentContent
      });
      grumble.newCommentContent = "";
    }
  });
})();
