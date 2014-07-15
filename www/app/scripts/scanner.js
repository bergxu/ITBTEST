angular.module('testApp')
.controller('scannerCtrl',function($scope, $state){
    //$scope.backShow.show();
    //$scope.BlocateMe.hide();
    //$scope.GlocateMe.hide();
	var scanner = cordova.require('com.phonegap.plugins.barcodescanner.barcodescanner');
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
	
	$scope.createBarCode = function(){
		scanner.encode("TEXT_TYPE", "http://www.taobao.com", function(success) {
            conosle.log("encode success: " + success);
          }, function(fail) {
        	  conosle.log("encoding failed: " + fail);
          }
        );
	};
});