angular.module('testApp')
.controller('baiduMapCtrl',function($scope, $state){

    $('.mapContainer').css('height', $scope.containerHeight + 'px');
    $('.mapContainer').css('width', $scope.containerWidth + 'px');

    $scope.backShow.show();
    $scope.backShow.name = 'start';
    $scope.backShow.title = 'Baidu Map';

	var map = new BMap.Map("mapArea");
    var point = new BMap.Point(121.303884, 31.000887);

    map.centerAndZoom(point, 13);
    var transit = new BMap.TransitRoute(map, {
          renderOptions: {map: map}
        });
    transit.search("吴泾", "徐家汇");

   $scope.bLocateMe = function() {
        var newPoint = new BMap.Point($scope.longitude, $scope.latitude);
        map.checkResize();
        map.setCenter(newPoint);
        map.enableAutoResize();
        map.addOverlay(new BMap.Marker(newPoint));
     }

    map.enableScrollWheelZoom();
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.MapTypeControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());

    
    map.addEventListener("click", function(e){    
     console.log(e.point.lng + ", " + e.point.lat);    
    });

    map.addEventListener("zoomend", function(){    
     console.log("地图缩放至：" + this.getZoom() + "级");    
    });

    map.addEventListener("dragend", function(){    
     var center = map.getCenter();    
     console.log("地图中心点变更为：" + center.lng + ", " + center.lat);    
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