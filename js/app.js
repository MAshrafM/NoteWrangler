angular.module('NoteWrangler', ['ngRoute', 'ngResource', 'Gravatar'])
.config(function($gravatarProvider){
  $gravatarProvider.setSize(100);
});