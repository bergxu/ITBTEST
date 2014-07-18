angular.module('testApp')
.controller('scannerCtrl',function($scope, $state){
     
  $scope.backShow.show();
  $scope.backShow.name = 'start';
  $scope.backShow.title = 'QR Scanner';
  var scanner = cordova.require('com.phonegap.plugins.barcodescanner.barcodescanner');

  $scope.QRlistItems = [
    {itemFunction : function(){
        $scope.scannerCode();
    }, title :'QR Scanner', imageSrc : 'app/imges/QR.png'},
    {itemFunction :function(){
        $scope.navHelp.go('qrEncode');
    }, title :'QR Encode', imageSrc : 'app/imges/add.png'}
  ];


	$scope.scannerCode = function(){
		scanner.scan( function (result) { 
            console.log("Scanner result: \n" +
                "text: " + result.text + "\n" +
                "format: " + result.format + "\n" +
                "cancelled: " + result.cancelled + "\n");
        }, function (error) { 
            console.log("Scanning failed: ", error); 
        } );
	};

});