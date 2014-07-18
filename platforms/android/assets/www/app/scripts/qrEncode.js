angular.module('testApp')
.controller('qrEncodeCtrl',function($scope, $state){

	$scope.backShow.show();
	$scope.backShow.name = 'scanner';
	$scope.backShow.title = 'Encode QR';

	  $scope.qrcodeString = '';
      $scope.size = 500;
      $scope.correctionLevel = '';
      $scope.typeNumber = 0;
      $scope.inputMode = '';
      $scope.image = true;

});