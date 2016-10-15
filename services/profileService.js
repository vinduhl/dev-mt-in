app.service("profileService", function() {

  var profiles = [];

  this.addProfile = function(profile) {
    profiles.push(profile);
    console.log(profiles);
  }

  this.searchProfile = function(name) {
    for(var i = 0; i < profiles.length; i++) {
      if(profiles[i].name === name) {
        return profiles[i];
      }
    }
  }

  this.getLoggedInUserProfile = function() {
    //TODO: try a better lookup here instead of loop because this is ugly
    for(var i = 0; i < profiles.length; i++) {
      if(profiles[i].isLoggedInUser) {
        return profiles[i];
      }
    }
    return null;
  }

  this.updateLoggedInUserProfile = function(profile) {
    //TODO: try a better lookup here instead of loop, maybe use getLoggedInUserProfile and update by reference??
    for(var i = 0; i < profiles.length; i++) {
      if(profiles[i].isLoggedInUser) {
        profiles[i] = profile;
        return true; //success
      }
    }
    return false; // couldn't find the profile, duh
  }

  this.cloneProfile = function(profile) {
    if(profile === null || typeof profile !== "object") {
      return profile;
    }

    var copy = profile.constructor();
    for(var key in profile) {
      if(profile.hasOwnProperty(key)) {
        copy[key] = profile[key];
      }
    }
    return copy;
  }

  // function Profile(name) {
  //   this.name = name;
  //   this.tagline = "";
  //   this.profileImageUrl = "";
  //   this.bio = "";
  //   this.isLoggedInUser = false;
  // }

  });
