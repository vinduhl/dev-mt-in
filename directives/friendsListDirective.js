app.directive("friendsListDirective", function() {
  return {
    templateUrl: "./directives/friendsList_dir.html",
    scope: {
      friendsList: "="
    }
  }
});
