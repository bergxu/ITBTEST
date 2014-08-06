angular.module('testApp')
.controller('scannerCtrl',function($scope, $state){
     
  $scope.backShow.show();
  $scope.backShow.name = 'start';
  $scope.backShow.title = 'QR Scanner';

  $scope.QRlistItems = [
    {itemFunction : function(){
        $scope.scannerCode.scan();
    }, title :'QR Scanner', imageSrc : 'app/imges/QR.png'},
    {itemFunction :function(){
        $scope.navHelp.go('qrEncode');
    }, title :'QR Encode', imageSrc : 'app/imges/add.png'}
  ];


	$scope.scannerCode = {
			scan: function() {
			    	cordova.exec(
			        	this.scanSuccess,
			        	this.scanError,
			        	'ScanditSDK', 'scan', ['KglWlBLkEeSfgDl+wsT2NXhkT0+lQKRyfzDjkoyEgdE', {
			            	'beep': true,
			            	'1DScanning': true,
			            	'2DScanning': true
			        	}]);
			},
			scanSuccess: function(data) {
				alert(data[0]);
		    	alert(data[1]);
			},
			scanError: function(error) {
			    	console.log('Failed: ' + error);
			}
	};

});