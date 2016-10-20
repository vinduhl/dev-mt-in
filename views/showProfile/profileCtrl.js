app.controller("profileCtrl", function($scope, $state, profileService, menuService) {

  //$scope.currentState = $state.current.name;

  var loggedInProfile = profileService.getLoggedInUserProfile();
  if(!loggedInProfile) {
    $state.go("createProfile");
  }

  menuService.getMenuDirectiveCallback()($state.current.name);

  $scope.loggedInUserProfile = loggedInProfile;
})
