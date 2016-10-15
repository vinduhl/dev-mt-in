app.controller("profileCtrl", function($scope, $state, profileService) {
    var loggedInProfile = profileService.getLoggedInUserProfile();
    if(!loggedInProfile) {
      $state.go("createProfile");
    }

    $scope.loggedInUserProfile = loggedInProfile;
})
