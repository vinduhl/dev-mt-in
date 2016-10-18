app.service("menuService", function() {
  let menuDirective;

  this.getMenuDirective = function() {
    return menuDirective;
  }

  this.setMenuDirective = function(directive) {
    menuDirective = directive;
  }
});
