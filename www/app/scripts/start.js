angular.module('testApp')
.controller('startCtrl',function($scope, $state){
	
	$scope.backShow.hide();
	$scope.backShow.name = 'start';
	$scope.backShow.title = 'ITB Test';
	$scope.listItems = [
		{name : 'scanner', title : 'QR Scanner', imageSrc : 'app/imges/twoQR.png'},
		{name : 'takeCamera', title : 'Take Photo', imageSrc : 'app/imges/takephotos.png'},
		{name : 'baiduMap', title : 'BaiduMap', imageSrc : 'app/imges/BaiduMap.png'},
		{name : 'googleMap', title : 'GoogleMap', imageSrc : 'app/imges/GoogleMap.png'}
	];

	
});
