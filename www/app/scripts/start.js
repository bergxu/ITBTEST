angular.module('testApp')
.controller('startCtrl',function($scope, $state){
	
	$scope.backShow.hide();
	$scope.backShow.name = 'start';
	$scope.backShow.title = 'ITB Test';
	$scope.listItems = [
		{name : 'scanner', title : 'QR Scanner'},
		{name : 'takeCamera', title : 'Take Photo'},
		{name : 'baiduMap', title : 'BaiduMap'},
		{name : 'googleMap', title : 'GoogleMap'},
	];

	
});
