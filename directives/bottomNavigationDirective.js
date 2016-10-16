app.directive("bottomNavigationDirective", function() {
  return {
    templateUrl: "./directives/bottomNavigation_dir.html",
    scope: {
      menuItem: "@"
    },
    link: function(scope, element, attr) {
      console.log("menuItem=", menuItem);

      var menuItemList = document.getElementById("bottomMenuItems")
        .getElementsByTagName("li");
      for(var i = 0; i < menuItemList.length; i++) {
          if(menuItemList[i].id === menuItem) {
            menuItemList[i].className = "menu-item-selected";
          } else {
            menuItemList[i].className = "menu-item";
          }
      }
    }
  }
})
