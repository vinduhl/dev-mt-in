app.controller("profileCtrl", function($scope, $state, profileService) {

  //$scope.currentState = $state.current.name;

  var loggedInProfile = profileService.getLoggedInUserProfile();
  if(!loggedInProfile) {
    $state.go("createProfile");
  }

  $scope.loggedInUserProfile = loggedInProfile;
})
