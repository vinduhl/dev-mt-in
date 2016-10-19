app.service("menuService", function() {
  let menuDirectiveCallback;

  this.getMenuDirectiveCallback = function() {
    return !menuDirectiveCallback ?
      function(){ console.log("menuDirectiveCallback not set") }
      : menuDirectiveCallback;
  }

  this.setMenuDirectiveCallback = function(directiveCallback) {
    menuDirectiveCallback = directiveCallback;
  }
});
