app.directive("bottomNavigationDirective", ['menuService', function(menuService) {
  return {
    templateUrl: "./directives/bottomNavigation_dir.html",
    scope: { },
    link: function(scope, element, attr) {

      function showIfActivated(currentState) {
        if(!currentState) {
          console.log("No Current State");
          return;
        }
        const menuItemList = document.getElementById("bottomMenuItems").getElementsByTagName("li");
        for(let i = 0; i < menuItemList.length; i++) {
          const menuItem = `${currentState}MenuItem`;
          if(menuItemList[i].id === menuItem) {
            menuItemList[i].className = "menu-item-selected";
          } else {
            menuItemList[i].className = "menu-item";
          }
        }
      }

      if(menuService) {
        menuService.setMenuDirectiveCallback(showIfActivated);
      }

    }
  }
}]);
