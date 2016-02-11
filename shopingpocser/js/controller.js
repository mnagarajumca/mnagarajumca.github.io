var pocCont=angular.module('pocCont',[]);
pocCont.controller('defCont',['$scope',function($scope){
	  $scope.pageClass = 'page-def';
}]);
pocCont.controller('catCont',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
var servername='http://mnagaraju-uidev.esy.es/testup/index.php/api/';

	$scope.pageClass = 'category';
	$scope.cid = $routeParams.cid;
		$http.get(servername+$routeParams.cid+'').success(function(resdata){
		$scope.resdata=resdata["data"][$routeParams.cid];
	})
}]);
pocCont.controller('subCont',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
var jsonroute=window.location.hash.split('/').slice(1,2);
var servicename=jsonroute+'_'+$routeParams.sid;
var servername='http://mnagaraju-uidev.esy.es/testup/index.php/api/';

	$scope.pageClass = 'subcategory '+jsonroute;
	$scope.sid = servicename;
		$http.get(servername+servicename+'').success(function(resdata){
		$scope.resdata=resdata["data"][servicename];
	})
}]);
pocCont.controller('cartCont',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
var servername='http://mnagaraju-uidev.esy.es/testup/index.php/api/';

	var jsonroute=window.location.hash.split('/').slice(1,2);
	$scope.pageClass = 'cart-details';
	 $scope.caid = $routeParams.caid;
	 $scope.numitems=1;
	 $scope.paydet=false;
	 $scope.togpaydet=function(){
		 $scope.paydet=!$scope.paydet;
	}
	var cart_data=$routeParams.caid.split("-").splice(0,1);
	var cart_id=$routeParams.caid.split("-").splice(1,2);
		$http.get(servername+$routeParams.caid+'/'+$routeParams.carid+'').success(function(resdata){
			$scope.cartdata=resdata["data"][$routeParams.caid];
	});
	$scope.setimg=function(img){
		alert(img);
		$scope.mainimg=img;
	}
}]);