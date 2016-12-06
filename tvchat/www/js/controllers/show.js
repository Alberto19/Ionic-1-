var mod = angular.module('tvchat.controllers.show', []);



mod.controller('ShowCtrl', function ($scope,
$stateParams,ShowsService,
                                     $firebaseArray,
                                     UserService) {

	$scope.user = UserService;
	$scope.showId = $stateParams.showId;
	$scope.show = ShowsService.getShow(parseInt($scope.showId));

	$scope.data = {
		messages: [],
		message: '',
		loading: true,
		showInfo: false
	};

	var messagesRef = firebase.database().ref();

	$scope.loadMessages = function () {
		var query = messagesRef
		.child("messages")
		.orderByChild("showId")
		.equalTo($scope.showId)
		.limiToLast(200);

		$scope.data.messages = $firebaseArray(query);
		$scope.data.messages.$loaded().then(function (data){
			console.log("AngularFire ");
			$scope.data.loading = false;
		});
	};

	$scope.sendMessage = function () {
		if($scope.data.message){
			$scope.data.messages.$add({
				showId: firebase.auth().currentUser.uid,
				text: $scope.data.message,
				username: firebase.auth().currentUser.displayName,
				profilePic: firebase.auth().currentUser.photoURL,
				timestamp: new Date().getTime()
			});
		}
	};

	console.log("ShowCtrl-Created");

	$scope.$on("$ionicView.enter", function () {
		console.log("ShowCtrl-Enter");
	});

	$scope.$on("$ionicView.beforeLeave", function () {
		console.log("ShowCtrl-Leave");
	});

});