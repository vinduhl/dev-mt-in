app.controller("mainCtrl", function($scope, profileService) {

  $scope.addNewProfile = function(profile) {
    profile.isLoggedInUser = true;
    profileService.addProfile(profile);
  }

  });
