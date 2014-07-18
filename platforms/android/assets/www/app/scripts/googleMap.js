angular.module('testApp')
.controller('googleMapCtrl',function($scope, $state){


    $('.angular-google-map-container').css('height', $scope.containerHeight + 'px');
    $('.angular-google-map-container').css('width', $scope.containerWidth + 'px');

    $scope.backShow.show();
    $scope.backShow.name = 'start';
    $scope.backShow.title = 'Google Map';
    
     $scope.gLocateMe = function() {
        $scope.map.currentMarker.latitude = $scope.latitude;
        $scope.map.currentMarker.longitude = $scope.longitude;
        $scope.map.center.latitude = $scope.latitude;
        $scope.map.center.longitude = $scope.longitude;
        $scope.$apply();
     }
    
	angular.extend($scope, {
        map: {
            control: {},
            version: 'uknown',
            showTraffic: false,
            showBicycling: false,
            showWeather: false,
            showHeat: false,
            center: {
                latitude: 31.000887, 
                longitude: 121.203884
            },
            zoom: 13,
            options: {
                streetViewControl: false,
                panControl: false,
                maxZoom: 20,
                minZoom: 1,
                mapTypeControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DEFAULT,
                    position: google.maps.ControlPosition.BOTTOM
                },
                disableDefaultUI: true,
                navigationControl: true,
                scaleControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            dragging: false,
            bounds: {},
            currentMarker: {
                show: true,
                showWindow: false,
                name: 'currentMarker',
                latitude: 31.000887, 
                longitude: 121.203884
            },
           markers: []
            
        }
    });

   



});