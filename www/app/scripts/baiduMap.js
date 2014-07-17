angular.module('testApp')
.controller('baiduMapCtrl',function($scope, $state){

	//$scope.backShow.show();
    //$scope.BlocateMe.show();
    //$scope.GlocateMe.hide();

    $scope.backShow.show();
	var map = new BMap.Map("mapArea");
    var point = new BMap.Point(121.303884, 31.000887);

    map.centerAndZoom(point, 13);
    
    var transit = new BMap.TransitRoute(map, {
    	  renderOptions: {map: map}
    	});
    transit.search("吴泾", "徐家汇");

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
         var newPoint = new BMap.Point(120.213884, 30.010887);
            //$scope.map.setCenter(myCenetr);
            map.checkResize();
            map.setCenter(newPoint);
            map.enableAutoResize();
            map.addOverlay(new BMap.Marker(newPoint));
        //$scope.map.center.latitude = $scope.latitude;
        //$scope.map.center.longitude = $scope.longitude;
        //$scope.$apply();
     }

    map.enableScrollWheelZoom();
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.MapTypeControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());

    
    map.addEventListener("click", function(e){    
     alert(e.point.lng + ", " + e.point.lat);    
    });

    map.addEventListener("zoomend", function(){    
     alert("地图缩放至：" + this.getZoom() + "级");    
    });

    map.addEventListener("dragend", function(){    
     var center = map.getCenter();    
     alert("地图中心点变更为：" + center.lng + ", " + center.lat);    
    });

    var currentMarker = new BMap.Marker(point);
    map.addOverlay(currentMarker);

    var marker1 = new BMap.Marker(new BMap.Point(121.223884, 31.023887));
    map.addOverlay(marker1);

    var content1 ="hello world"; 
    var opts1 = { width: 300 };

    var  infoWindow = new BMap.InfoWindow(content1, opts1);
    marker1.addEventListener('click',function(){ marker1.openInfoWindow(infoWindow);});


});