angular.module('testApp')
.controller('baiduMapCtrl',function($scope, $state){

	//$scope.backShow.show();
    //$scope.BlocateMe.show();
    //$scope.GlocateMe.hide();
	$scope.map = new BMap.Map("mapArea");
    var point = new BMap.Point(121.303884, 31.000887);

    $scope.map.centerAndZoom(point, 13);

    //var mapTest = {
    //    myTest: function(obj){
            // map.getCenter().lat = 120.213884;
             //map.getCenter().lng = 30.010887;
             //console.
            // log(obj.lat + "===" + obj.lng);
    //    }
   // }

   // $scope.setMap(mapTest);

   $scope.bLocateMe = function() {
        var newPoint = new BMap.Point($scope.latitude, $scope.longitude);
        	var myCenetr = $scope.map.getCenter();
        	//$scope.map.setCenter(myCenetr);
        	$scope.map.checkResize();
        	$scope.map.setCenter(newPoint);
        	$scope.map.setZoom(13);
        	$scope.map.enableAutoResize();
        //$scope.map.addOverlay(new BMap.Marker(newPoint));
        //$scope.map.center.latitude = $scope.latitude;
        //$scope.map.center.longitude = $scope.longitude;
        //$scope.$apply();
     }

   $scope.map.enableScrollWheelZoom();
   $scope.map.addControl(new BMap.NavigationControl());
   $scope.map.addControl(new BMap.MapTypeControl());
   $scope.map.addControl(new BMap.ScaleControl());
   $scope.map.addControl(new BMap.OverviewMapControl());

    
   $scope.map.addEventListener("click", function(e){    
     alert(e.point.lng + ", " + e.point.lat);    
    });

   $scope.map.addEventListener("zoomend", function(){    
     alert("地图缩放至：" + this.getZoom() + "级");    
    });

   $scope.map.addEventListener("dragend", function(){    
     var center = $scope.map.getCenter();    
     alert("地图中心点变更为：" + center.lng + ", " + center.lat);    
    });

    var currentMarker = new BMap.Marker(point);
    $scope.map.addOverlay(currentMarker);

    var marker1 = new BMap.Marker(new BMap.Point(121.223884, 31.023887));
    $scope.map.addOverlay(marker1);

    var content1 ="hello world"; 
    var opts1 = { width: 300 };

    var  infoWindow = new BMap.InfoWindow(content1, opts1);
    marker1.addEventListener('click',function(){ marker1.openInfoWindow(infoWindow);});

});