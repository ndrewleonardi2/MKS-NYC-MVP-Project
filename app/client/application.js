angular.module('framed', [
  'framed.upload',
  'framed.player',
  'ngRoute'
])

.config(function($routeProvider, $httpProvider){
  $routeProvider
  .when('/upload', {
    templateURL: 'upload/upload.html',
    controller: 'uploadController'
  })
  .when('/player', {
    templateURL: 'player/player.html',
    controller: 'playerController'
  })
  .otherwise({
      redirectTo: '/upload'
    });
});
