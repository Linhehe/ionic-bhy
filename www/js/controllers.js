angular.module('starter.controllers', ['ionic'])
	.controller('LoginCtrl', function ($scope,$http,$ionicPopup,$ionicLoading) {
		var data = {email: '8888888888@qq.com', password: '123'};
		$scope.data = data;
		$scope.login = function () {
			var loading = $ionicLoading.show({content: 'Loading...'});
			return $http.get('http://127.0.0.1:3000/sessions', {params:{email:$scope.data.email, password:$scope.data.password}})
				.success(function(data,status){
					if (data == null) 
					{
						var alertPopup = $ionicPopup.alert({
							title: '警告',
							template: '输入的用户名和密码错误'
						});
					}else
					{
						var alertPopup2 = $ionicPopup.alert({
							title: 'Good',
							template: 'Success!!'
						});
					}
				}).error(function(data,status){
					k=2;
				}).then(function() {
					$ionicLoading.hide();
				});
		}
	})

	.controller('RegisterCtrl', function ($scope,$http,$ionicPopup,$ionicLoading) {
		// $scope.data = {
		// 	email: $scope.email,
		// 	password: $scope.password
		// };
		$scope.register = function () {
			var loading = $ionicLoading.show({content: 'Loading...'});
			return $http.post('http://127.0.0.1:3000/sessions', {
				email: '123',
				password: '123'
			})
			.success(function(data,status){
				//
			}).error(function(data,status){
				//
			}).then(function() {
				$ionicLoading.hide();
				$ionicPopup.alert({
					title: 'Good',
					template: 'Succeed!!!'
				});
			});
		}
	})

// .controller('RegisterCtrl', [ 
// 		'$scope', 
// 		'$http',
// 		'$ionicLoading',
// 		'$ionicPopup',
// 		function ($scope,$http,$ionicPopup,$ionicLoading) {
// 		// $scope.data = {};
// 		$scope.register = function () {
// 			var loading = $ionicLoading.show({content: 'Loading...'});
// 			var url = 'http://127.0.0.1:3000/sessions',
// 				data = {
// 					email: $scope.email,
// 					password: $scope.password
// 				},
// 				transFn = function(data) {
// 					return $.param(data);
// 				},
// 				postCfg = {
// 					headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
// 					transformRequest: transFn
// 				};
// 			$http.post(url, data, postCfg)
// 				.success(function(){
// 					window.localtion.href = 'http://127.0.0.1:3000/sessions';
// 				});
// 		}
// 	}])