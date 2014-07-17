var app = angular.module('testApp', ['ui.router','google-maps','ngAnimate','ja.qr']).value('$anchorScroll', angular.noop)
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('scanner', {
            url: "/scanner",
            templateUrl: "app/views/scanner.html",
            controller: 'scannerCtrl'
        })
        .state('takeCamera', {
            url: "/takeCamera",
            templateUrl: "app/views/takeCamera.html",
            controller: 'takeCameraCtrl'
        })
        .state('baiduMap', {
            url: "/baiduMap",
            templateUrl: "app/views/baiduMap.html",
            controller: 'baiduMapCtrl'
        })
        .state('googleMap', {
            url: "/googleMap",
            templateUrl: "app/views/googleMap.html",
            controller: 'googleMapCtrl'
        })
        .state('start', {
            url: "/start",
            templateUrl: "app/views/start.html",
            controller: 'startCtrl'
        });

     $urlRouterProvider.otherwise("/start")
}).controller('mainCtl',function($rootScope, $scope, $state){
    $scope.navHelp = {
        slide : 'slide-left',
        back : function (state, apply) {
            this.slide = 'slide-right';
            if(apply) {
                $scope.$apply();
            }
            setTimeout(function() {
                $state.go(state);
            }, 10);
        },
        go : function(state, apply) {
            this.slide = 'slide-left';
            if(apply) {
                $scope.$apply();
            }
            setTimeout(function() {
                $state.go(state);
            }, 10);
        }
    };


    $scope.backShow = {
        flag : false,
        show : function(){
            this.flag = true;
        },
        hide : function(){
            this.flag = false;
        }
    };


    var getCurrentLocation = function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            var c = position.coords;
            $scope.latitude = c.latitude;
            $scope.longitude = c.longitude;
            console.log(c.latitude);
        }, function(error) {
            console.log(error);
        });
    };
    getCurrentLocation();

});;