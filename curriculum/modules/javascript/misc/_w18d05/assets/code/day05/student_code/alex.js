function Rocket(name) {
  this.name = name;
  this.type = "Space rocket";
}

Rocket.prototype.start = function() {
  console.log("3, 2, 1... Liftoff!");
}

Rocket.prototype.sendSignal = function() {
  console.log("We are here! Your " + this.name);
}

// const spaceX = new Rocket("SpaceX");
// spaceX.start();
// spaceX.sendSignal();

// const falcon9 = new Rocket("Falcon 9");
// falcon9.start();
// falcon9.sendSignal();

//class

class ModernRocket {
  constructor(name, problems) {
    this.name = name;
    this.type = "Space rocket";
    this.problems = problems;
  }
  start() {
    console.log(this.name + ": 3, 2, 1... Liftoff!");
  }
  sendSignal() {
    console.log("We are here! Your " + this.name);
  }
  haveProblems() {
    if (this.problems) {
      console.log(this.name + ": Houston, we have a problem");
    } else {
      console.log(this.name + ": No problems detected");
    }
    
  }
}


const spaceXStarship = new ModernRocket("SpaceX Starship", true);
console.log('======== ModernRocket ==========');
spaceXStarship.start();
spaceXStarship.sendSignal();
spaceXStarship.haveProblems();



//extend
class MarsRocket extends ModernRocket {
  constructor(name, problems, launchSite, height) {
    super(name, problems);
    this.launchSite = launchSite;
    this.height = height;
  }

  startedFrom() {
    console.log(this.name + " launched from " + this.launchSite + " and has height of " + this.height + " meters");
  }
}


const marsRocket = new MarsRocket("Atlas V-541", false, "Cape Canaveral Air Force Station", 58);
console.log('========== MarsRocket ==========');
marsRocket.start();
marsRocket.sendSignal();
marsRocket.startedFrom();
marsRocket.haveProblems();