var pocApp=angular.module('pocApp',['ngRoute','pocCont']);
pocApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'partials/def.html',
		controller:'defCont'
		}).when('/cat/:cid',{
		templateUrl:'partials/category.html',
		controller:'catCont'
		}).when('/men/:sid',{
		templateUrl:'partials/subcat.html',
		controller:'subCont'
		}).when('/women/:sid',{
		templateUrl:'partials/subcat.html',
		controller:'subCont'
		}).when('/kids/:sid',{
		templateUrl:'partials/subcat.html',
		controller:'subCont'
		}).when('/cart/:caid/:carid',{
		templateUrl:'partials/cart.html',
		controller:'cartCont'
		}).otherwise({
			redirectTo:'/'
		});
}]);
