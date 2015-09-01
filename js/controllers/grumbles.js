(function() {
  angular.module('grumblr')
  .controller('grumblesController', function() {
    this.grumbles = [{"id":667,"authorName":"Jesse","content":"Only those who attempt the impossible can achieve the absurd.","title":"29 hipster kanye quotes that people born after 1990 wil never understand","photoUrl":"https://splashbase.s3.amazonaws.com/getrefe/regular/tumblr_n6ni6khmfG1slhhf0o2_1280.jpg","created_at":"2015-09-01T14:10:07.845Z","updated_at":"2015-09-01T14:10:07.845Z"},{"id":668,"authorName":"Adam","content":"Do a bit more for your friends.","title":"8 sweet pokemons","photoUrl":"https://splashbase.s3.amazonaws.com/unsplash/regular/TIDqBLgQw6IUt5ZHKS0f_11891558035_eafdf53bf0_o.jpg%3Ffit%3Dcrop%26fm%3Djpg%26h%3D650%26q%3D75%26w%3D950","created_at":"2015-09-01T14:10:12.922Z","updated_at":"2015-09-01T14:10:12.922Z"},{"id":669,"authorName":"Andy","content":"Don't give a speech. Put on a show.","title":"33 quirky hipchat messages","photoUrl":"https://splashbase.s3.amazonaws.com/moveast/regular/tumblr_nj5o149XaX1tomxvuo3_1280.jpg","created_at":"2015-09-01T14:10:17.685Z","updated_at":"2015-09-01T14:10:17.685Z"},{"id":670,"authorName":"Robin","content":"If you want to be happily married, marry a happy person.","title":"17 TV moms eating sandwiches","photoUrl":"https://splashbase.s3.amazonaws.com/unsplash/regular/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg%3Ffit%3Dcrop%26fm%3Djpg%26h%3D450%26q%3D75%26w%3D950","created_at":"2015-09-01T14:10:19.196Z","updated_at":"2015-09-01T14:10:19.196Z"},{"id":671,"authorName":"Adrian","content":"A nod is as good as a wink to a blind horse.","title":"23 awesome Justin Bieber quotes","photoUrl":"https://splashbase.s3.amazonaws.com/getrefe/regular/tumblr_n0aag1nF9l1slhhf0o1_1280.jpg","created_at":"2015-09-01T14:10:21.749Z","updated_at":"2015-09-01T14:10:21.749Z"},{"id":672,"authorName":"Matt","content":"If you are ever in doubt about whether or not to wash your hair: Wash it.","title":"23 tigers wearing a tux","photoUrl":"https://splashbase.s3.amazonaws.com/snapographic/regular/DSC02132-wpcf_700x400.jpg","created_at":"2015-09-01T14:10:23.771Z","updated_at":"2015-09-01T14:10:23.771Z"}]
    // line 6 is only here for demo purposes to provide default value
    this.photoUrl = "http://headwayscareer.com/wp-content/uploads/2015/06/Angular-JS-training-in-Chandigarh-headways-Career.png"
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
  });
})();
