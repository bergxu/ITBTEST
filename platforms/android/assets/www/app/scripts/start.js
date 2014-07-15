angular.module('testApp')
.controller('startCtrl',function($scope, $state){
	
	//$scope.backShow.hide();
	//$scope.GlocateMe.hide();
	//$scope.BlocateMe.hide();
	var items = $('.menuItem');

	for(var i = 0, l = items.length; i < l; i++) {
	  items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	  
	  items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	}

	$scope.toggleMenu = function(e) {
	   e.preventDefault(); 
	   document.querySelector('.myCircle').classList.toggle('open');
	}

	
});
