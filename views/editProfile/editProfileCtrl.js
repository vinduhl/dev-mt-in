app.controller("editProfileCtrl", function($scope, $state, $stateParams, profileService, menuService) {

  //menuService.setCurrentState($state.current.name);

  var loggedInProfile = profileService.getLoggedInUserProfile();
  if(!loggedInProfile) {
    $state.go("createProfile");
  }
  $scope.loggedInUserProfile = loggedInProfile;
  $scope.profile = profileService.cloneProfile(loggedInProfile);
  console.log("About to execute menuService.getMenuDirectiveCallback");
  menuService.getMenuDirectiveCallback()($state.current.name);
  console.log("finished execution of menuService.getMenuDirectiveCallback");
  //menuService.setCurrentMenuItem($stateParams.menuItemId);

  $scope.saveChangedProfile = function(profile) {
    if(profileService.updateLoggedInUserProfile(profile)) { // i.e. success
      $scope.loggedInUserProfile = profile; // to refresh the screen
    } else {
      //TODO: show error message to user or log error?
    }

  }

});
