app.directive("bottomNavigationDirective", function() {
  return {
    templateUrl: "./directives/bottomNavigation_dir.html",
    scope: {
      menuItem: "="
    },
    link: function(scope, element, attr) {
      console.log("menuItem=", scope.menuItem);

      const menuItemList = document.getElementById("bottomMenuItems")
        .getElementsByTagName("li");

      for(let i = 0; i < menuItemList.length; i++) {

          menuItemList[i].onclick = function(elem) { // use this!
            for(let i = 0; i < menuItemList.length; i++) {
              if(menuItemList[i].id === getMenuItem()) {
                console.log("here.");
                menuItemList[i].className = "menu-item-selected";
              } else {
                console.log("here2.");
                menuItemList[i].className = "menu-item";
              }
            }
          }
      }

      function getMenuItem() {
        return scope.menuItem;
      }
    }
  }
})
