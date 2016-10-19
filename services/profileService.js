app.service("profileService", function() {

  var friendsProfiles = [
    {
      name: "Regine Velasquez",
      tagline: "Every day is a great day!",
      profileImageUrl: "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2015/09/01/miss-piggy.png",
      bio: "test bio"
    },
    {
      name: "Chris Smith",
      tagline: "I approve!",
      profileImageUrl: "https://pbs.twimg.com/profile_images/654052237929414656/YUI--ZV8.jpg",
      bio: "test bio 2"
    },
    {
      name: "John Hershey",
      tagline: "Chocolates is my business.",
      profileImageUrl: "http://www.wikihow.com/images/4/4a/Draw-Stewie-from-Family-Guy-Step-17.jpg",
      bio: "test bio 3"
    }
  ];


  var loggedInUserProfile;

  this.addProfile = function(profile) {
    if(profile.isLoggedInUser) {
      loggedInUserProfile = profile;
    } else {
      friendsProfiles.push(profile);
    }

    console.log(friendsProfiles);
  }

  this.searchProfile = function(name) {
    for(var i = 0; i < friendsProfiles.length; i++) {
      if(friendsProfiles[i].name === name) {
        return friendsProfiles[i];
      }
    }
  }

  this.getLoggedInUserProfile = function() {
    return loggedInUserProfile;
  }

  this.updateLoggedInUserProfile = function(profile) {
    loggedInUserProfile = profile;
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


  });
