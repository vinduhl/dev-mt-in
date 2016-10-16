app.service("menuService", function() {
  var currentMenuItem = "";

  this.getCurrentMenuItem = function() {
    return currentMenuItem;
  }

  this.setCurrentMenuItem = function(menuItemId) {
    currentMenuItem = menuItemId;
  }
});
