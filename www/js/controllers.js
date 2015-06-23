var param = function (obj) {
	var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

	for (name in obj) {
		value = obj[name];

		if (value instanceof Array) {
			for (i = 0; i < value.length; ++i) {
				subValue = value[i];
				fullSubName = name + '[' + i + ']';
				innerObj = {};
				innerObj[fullSubName] = subValue;
				query += param(innerObj) + '&';
			}
		}
		else if (value instanceof Object) {
			for (subName in value) {
				subValue = value[subName];
				fullSubName = name + '[' + subName + ']';
				innerObj = {};
				innerObj[fullSubName] = subValue;
				query += param(innerObj) + '&';
			}
		}
		else if (value !== undefined && value !== null)
			query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
	}

	return query.length ? query.substr(0, query.length - 1) : query;
};

var myemail="";

angular.module('starter.controllers', ['ionic'])
	// 登陆
	.controller('LoginCtrl', function ($scope,$http,$ionicPopup,$ionicLoading,$state,$ionicHistory) {
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
						myemail = data.email;
						$state.go('show');
					}
				}).error(function(data,status){
					k=2;
				}).then(function() {
					$ionicLoading.hide();
				});
		};
		//$scope.jump = function(){
		//	$state.go('register')
		//}
	})

	// 注册
	.controller('RegisterCtrl', function ($scope,$http,$ionicPopup,$ionicLoading,$state) {
		$scope.user = { email: 'linhehe@qq.com', password: '123'};

		$scope.register = function () {

			if($scope.user.email == "" || $scope.user.password == ""){
				$ionicPopup.alert({
					title: 'Error',
					template: '邮箱和密码不能为空!!'
				});
			}else{
				$ionicLoading.show({content: 'Loading...'});
				$http({
					url: 'http://localhost:3000/sessions',
					method: "POST",
					headers: {'Content-Type': 'application/x-www-form-urlencoded'},
					data: param($scope.user)
				}).success(function(data){

					if(data == 'error'){
						$ionicPopup.alert({
							title: '抱歉',
							template: '该邮箱已被注册!!'
						})
					}else{
						$ionicPopup.alert({
							title: '恭喜你',
							template: '注册成功!!'
						});
						$state.go('login');
					}
				}).error(function(){
					//
				}).then(function(){
					$ionicLoading.hide();
				});
			}
		}
	})

	// 取数据
	.controller('ShowCtrl', function($scope,$http){
		$scope.user = {email: '123@qq.com', sex: 'boy'};
		$http.get('http://localhost:3000/show', {params:{email:myemail}})
			.success(function(data){
				$scope.user.email = data.email;
				$scope.user.sex = data.sex;
				$scope.user.password = data.password;
			}).error(function(data,status){
				//
			}).then(function(data) {
				//
			});
	})
