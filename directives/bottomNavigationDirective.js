app.directive("bottomNavigationDirective", function() {
  return {
    templateUrl: "./directives/bottomNavigation_dir.html",
    scope: {},
    link: function(scope, element, attr) {

      const menuItemList = document.getElementById("bottomMenuItems")
        .getElementsByTagName("li");

      for(let i = 0; i < menuItemList.length; i++) {

          menuItemList[i].onclick = function() { // use this!
            for(let i = 0; i < menuItemList.length; i++) {
              if(menuItemList[i].id === this.id) {
                menuItemList[i].className = "menu-item-selected";
              } else {
                menuItemList[i].className = "menu-item";
              }
            }
          }
      }

    }
  }
})
