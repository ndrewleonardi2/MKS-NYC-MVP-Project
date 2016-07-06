angular.module('framed.player', [])

.factory('player', function($scope, $http){
  var postVideo = function () {
    return $http({
      method: 'POST',
      url: './uploads'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

})

.controller('playerController', function($scope, player){

  // $scope.postVideo = player.postVideo();

  var options = ({
      'rate': 30,
      'controls': false,
      'autoplay': true,
      'backwards': false,
      'startFrame': 10,
      'width': '640px',
      'height': '390px',
      'radius': '50%'
  });



  var player = new FramePlayer('my-player', options);

  player.play();

})
