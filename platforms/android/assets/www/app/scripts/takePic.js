angular.module('testApp')
.controller('takeCameraCtrl',function($scope, $state){
	
  $scope.backShow.show();
  $scope.backShow.name = 'start';
  $scope.backShow.title = 'Take Picture';

  $scope.piclistItems = [
    {
        itemFunction : function(){
          $scope.capturePhoto();
      },title : 'take Picture', imageSrc: 'app/imges/takepicture.png'
    },
    {
        itemFunction : function(){
          $scope.getPhoto();
      },title : 'Pic from library', imageSrc: 'app/imges/takepictureAlbum.png'
    }
  ];
	var  pictureSource = navigator.camera.PictureSourceType;
  var  destinationType = navigator.camera.DestinationType;
	
  $scope.capturePhoto = function(){
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
          destinationType: destinationType.DATA_URL });
	};
		
	$scope.getPhoto = function(){
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: pictureSource.PHOTOLIBRARY });
	};
	
	var onPhotoDataSuccess = function(imageData) {
      var smallImage = document.getElementById('smallImage');
      smallImage.style.display = 'block';
      smallImage.src = "data:image/jpeg;base64," + imageData;
  };

  var onPhotoURISuccess = function(imageURI) {
    var largeImage = document.getElementById('smallImage');
    largeImage.style.display = 'block';
    largeImage.src = imageURI;
  };

  var onFail = function(message) {
      alert('Failed because: ' + message);
   };

});