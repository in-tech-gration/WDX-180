;(function scopeGame(){

  const arrayChangeHandler = {
    get: function(target, property) {
      console.log('getting ', property);
      return target[property];
    },
    set: function(target, property, value, receiver) {
      console.log('setting ', property, value);
      target[property] = value;
      return true;
    }
  };

  // STEP 1: QUICK KNOWLEDGE TEST

  // STEP 2: ?
  
  // STEP 3: THE 3 MUSKETEERS
  window.Athos = "https://";
  window.Porthos = "/curriculum/modules/javascript/core/exercises/scope-game/first-challenge-unlocked";
  window.Aramis = "in-tech-gration.github.io"

  // STEP 4: Spot the Global Variables
  var lonelyIsland;
  weirdKeyword = "I don't bite";

  function safePlace( privateParameter ){
    var wc = "occupied";
    safe = "$10.000";
    return privateParameter.toLowerCase();
  }

  egg = safePlace("BIG NEWS!");

  window.globalVariablesBag = new Proxy([], arrayChangeHandler );
  
  // STEP 5: Spot the Local Variables (Hiding inside Function Scope)

}());