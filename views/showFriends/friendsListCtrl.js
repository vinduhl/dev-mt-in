app.controller("friendsListCtrl", function($scope, $state, profileService, menuService) {

  var loggedInProfile = profileService.getLoggedInUserProfile();
  if(!loggedInProfile) {
    $state.go("createProfile");
  }
  $scope.loggedInUserProfile = loggedInProfile;
  menuService.getMenuDirectiveCallback()($state.current.name);

  const friendsList = profileService.getFiendsList();
  console.log("friendsList", friendsList);
  $scope.friendsList = friendsList;
});
