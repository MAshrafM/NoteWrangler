angular.module('NoteWrangler').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      // redirect to the notes index
      redirectTo: '/notes'
    })
    
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html',
      controller: 'UsersIndexController'
    })
    
    .when('/users/:id', {
      templateUrl: 'templates/pages/users/show.html',
      controller: 'UsersShowController'
    })
    
    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: 'NotesIndexController'
    })
    
    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html',
      controller: 'NotesCreateController'
    })
    
    .when('/notes/:id', {
      templateUrl: 'templates/pages/notes/show.html',
      controller: 'NotesShowController'
    })

    .when('/notes/:id/edit', {
      templateUrl: 'templates/pages/notes/edit.html',
      controller: 'NotesEditController'
    })
    
    .when('/profile/edit', {
      templateUrl: 'templates/pages/profile/edit.html',
      controller: 'ProfileEditController'
    })

    .otherwise({redirectTo: '/'});
}]);