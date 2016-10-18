var app = angular.module("socialApp", ["ui.router"]);

app.config( function( $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/showProfile/profileDisplay_partial.html",
      controller: "profileCtrl"
    })
    .state("createProfile", {
      url: "/createProfile",
      templateUrl: "./views/createProfile/newForm_partial.html",
      controller: "newProfileCtrl"
    })
    .state("updateProfile", {
      url: "/updateProfile",
      templateUrl: "./views/editProfile/editForm_partial.html",
      controller: "editProfileCtrl"
    })
});
