var app = angular.module('testApp', ['ui.router','google-maps'])
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
}).controller('mainCtl',function($scope, $state){
    // $scope.backShow = {
    //     flag : false,
    //     show : function(){
    //         this.flag = true;
    //     },
    //     hide : function(){
    //         this.flag = false;
    //     }
    // };
    //  $scope.BlocateMe = {
    //     flag : false,
    //     show : function(){
    //         this.flag = true;
    //     },
    //     hide : function(){
    //         this.flag = false;
    //     }
    // };
    //  $scope.GlocateMe = {
    //     flag : false,
    //     show : function(){
    //         this.flag = true;
    //     },
    //     hide : function(){
    //         this.flag = false;
    //     }
    // };

    // $scope.bLocateMe = function(){
    //    var mapObj = {
    //         lat : 121.213884,
    //         lng : 31.010887
    //    }
    //    var testMap = $scope.getMap();
    //    testMap.myTest(mapObj);
    // };

    // $scope.gLocateMe = function(){
    // };

    // var context;
    // var that = this;
    // $scope.setMap = function(c) {
    //     that.context = c;
    // };

    // $scope.getMap = function() {
    //     return that.context;
    // };


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