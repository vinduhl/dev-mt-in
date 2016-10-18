app.controller("newProfileCtrl", function($scope, $state, profileService, menuService) {
  //console.log("$scope.profile=", $scope.profile);
  menuService.setCurrentState($state.current.name);
  
  $scope.addNewProfile = function(profile) {
    console.log(profile);
    if(profile) {
      profile.isLoggedInUser = true;
      profileService.addProfile(profile);
      console.log(profile);
      $state.go("home");
    }
  }

});
