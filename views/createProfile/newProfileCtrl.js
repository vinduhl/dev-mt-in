app.controller("newProfileCtrl", function($scope, $state, profileService) {
  console.log("$scope.profile=", $scope.profile);

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
