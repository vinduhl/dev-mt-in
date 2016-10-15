app.directive("profileDirective", function() {
  return {
    templateUrl: "./directives/profile_dir.html",
    scope: {
      user: "="
    }
  }
})
