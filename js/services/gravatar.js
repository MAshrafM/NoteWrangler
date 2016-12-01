angular.module("NoteWrangler")
  .provider("Gravatar", function GravatarProvider(){
    var avatarSize = 80;
    var avatarURL = "http://www.gravatar.com/avatar/";
    
    this.setSize = function(size){
      avatarSize = size;
    }
    this.$get = function(){
      return function(email){
        return avatarURL + CryptoJS.MD5(email) + "?size=" + avatarSize.toString();
      }
    };
  });