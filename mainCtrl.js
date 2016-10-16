app.controller("mainCtrl", function($scope, profileService, menuService) {

  $scope.addNewProfile = function(profile) {
    profile.isLoggedInUser = true;
    profileService.addProfile(profile);
  }

  $scope.selectedMenuItem = menuService.getCurrentMenuItem();

  });
