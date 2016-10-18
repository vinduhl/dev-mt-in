app.directive("bottomNavigationDirective", ['menuService', function(menuService) {
  return {
    templateUrl: "./directives/bottomNavigation_dir.html",
    scope: { },
    link: function(scope, element, attr) {

      _menuService = menuService;
      const menuItemList = document.getElementById("bottomMenuItems")
        .getElementsByTagName("li");

      for(let i = 0; i < menuItemList.length; i++) {
          menuItemList[i].onclick = showIfActivated;
      }

      function showIfActivated() {
        let currentState = _menuService.getCurrentState();
        for(let i = 0; i < menuItemList.length; i++) {
          console.log("2 currentState=", currentState);
          if(currentState &&
            this.id === currentState) {
            this.className = "menu-item-selected";
          } else {
            this.className = "menu-item";
          }
        }
      }

    }
  }
}]);
