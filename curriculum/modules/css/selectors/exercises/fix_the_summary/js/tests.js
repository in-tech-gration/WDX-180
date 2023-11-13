;(function initCSSChallenge(){

  let confettis = (function(doc) {
    
    var H, W, canvas, clamp, colors, context, friction, generator1, generatorStock, gravity, particle, particleGenerator, randomInt, update, utils, wind;

    utils = {
      norm: function(value, min, max) {
        return (value - min) / (max - min);
      },
      lerp: function(norm, min, max) {
        return (max - min) * norm + min;
      },
      map: function(value, sourceMin, sourceMax, destMin, destMax) {
        return utils.lerp(utils.norm(value, sourceMin, sourceMax), destMin, destMax);
      },
      clamp: function(value, min, max) {
        return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
      },
      distance: function(p0, p1) {
        var dx, dy;
        dx = p1.x - p0.x;
        dy = p1.y - p0.y;
        return Math.sqrt(dx * dx + dy * dy);
      },
      distanceXY: function(x0, y0, x1, y1) {
        var dx, dy;
        dx = x1 - x0;
        dy = y1 - y0;
        return Math.sqrt(dx * dx + dy * dy);
      },
      circleCollision: function(c0, c1) {
        return utils.distance(c0, c1) <= c0.radius + c1.radius;
      },
      circlePointCollision: function(x, y, circle) {
        return utils.distanceXY(x, y, circle.x, circle.y) < circle.radius;
      },
      pointInRect: function(x, y, rect) {
        return utils.inRange(x, rect.x, rect.x + rect.width) && utils.inRange(y, rect.y, rect.y + rect.height);
      },
      inRange: function(value, min, max) {
        return value >= Math.min(min, max) && value <= Math.max(min, max);
      },
      rangeIntersect: function(min0, max0, min1, max1) {
        return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1);
      },
      rectIntersect: function(r0, r1) {
        return utils.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) && utils.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
      },
      degreesToRads: function(degrees) {
        return degrees / 180 * Math.PI;
      },
      radsToDegrees: function(radians) {
        return radians * 180 / Math.PI;
      },
      randomRange: function(min, max) {
        return min + Math.random() * (max - min);
      },
      randomInt: function(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
      }
    };

    canvas = document.createElement("canvas");
    canvas.setAttribute("id","canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.left = "0";
    document.body.appendChild(canvas);
    // canvas = document.getElementById('canvas');

    context = canvas.getContext('2d');

    W = canvas.width = window.innerWidth;

    H = canvas.height = window.innerHeight;

    generatorStock = [];

    gravity = parseFloat(0.2);

    // 1~-1, 0.1
    friction = 0.99;

    // 0.99~0.1, 0.01
    wind = 0;

    // -1~1, 0.1
    colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548'];

    particleGenerator = function(x, y, w, h, number, text) {
      // particle will spawn in this aera
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.number = number;
      this.particles = [];
      this.text = text;
      this.recycle = true;
      this.type = 1;
    };

    particleGenerator.prototype.animate = function() {
      var i, p;
      context.fillStyle = 'grey';
      context.beginPath();
      context.strokeRect(this.x, this.y, this.w, this.h);
      context.font = '13px arial';
      context.textAlign = 'center';
      context.closePath();
      if (this.particles.length < this.number) {
        this.particles.push(new particle(clamp(randomInt(this.x, this.w + this.x), this.x, this.w + this.x), clamp(randomInt(this.y, this.h + this.y), this.y, this.h + this.y), this.text));
      }
      if (this.particles.length > this.number) {
        this.particles.length = this.number;
      }
      i = 0;
      while (i < this.particles.length) {
        p = this.particles[i];
        p.update();
        if (p.y > H || p.y < -100 || p.x > W + 100 || p.x < -100 && this.recycle) {
          //a brand new particle replacing the dead one
          this.particles[i] = new particle(clamp(randomInt(this.x, this.w + this.x), this.x, this.w + this.x), clamp(randomInt(this.y, this.h + this.y), this.y, this.h + this.y), this.text);
        }
        i++;
      }
    };

    generator1 = new particleGenerator(0, 0, W, 0, 100);

    randomInt = function(min, max) {
      return min + Math.random() * (max - min);
    };

    clamp = function(value, min, max) {
      return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
    };

    particle = function(x, y) {
      this.radius = randomInt(.1, 1);
      this.x = x;
      this.y = y;
      this.vx = randomInt(-4, 4);
      this.vy = randomInt(-10, -0);
      this.type = utils.randomInt(0, 1);
      this.w = utils.randomRange(5, 20);
      this.h = utils.randomRange(5, 20);
      this.r = utils.randomRange(5, 10);
      this.angle = utils.degreesToRads(randomInt(0, 360));
      this.anglespin = randomInt(-0.2, 0.2);
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.rotateY = randomInt(0, 1);
    };

    update = function() {
      gravity = parseFloat(0.1);
      generator1.number = 100;
      friction = 0.99;
      wind = parseFloat(0);
      context.fillStyle = 'white';
      context.clearRect(0, 0, W, H);
      generator1.animate();
      requestAnimationFrame(update);
    };

    particle.prototype.update = function() {
      var angle, i, x, y;
      this.x += this.vx;
      this.y += this.vy;
      this.vy += gravity;
      this.vx += wind;
      this.vx *= friction;
      this.vy *= friction;
      this.radius -= .02;
      if (this.rotateY < 1) {
        this.rotateY += 0.1;
      } else {
        this.rotateY = -1;
      }
      this.angle += this.anglespin;
      context.save();
      context.translate(this.x, this.y);
      context.rotate(this.angle);
      context.scale(1, this.rotateY);
      context.rotate(this.angle);
      context.beginPath();
      context.fillStyle = this.color;
      context.strokeStyle = this.color;
      context.lineCap = 'round';
      context.lineWidth = 2;
      if (this.type === 0) {
        context.beginPath();
        context.arc(0, 0, this.r, 0, 2 * Math.PI);
        context.fill();
      } else if (this.type === 2) {
        context.beginPath();
        i = 0;
        while (i < 22) {
          angle = 0.5 * i;
          x = (.2 + 1.5 * angle) * Math.cos(angle);
          y = (.2 + 1.5 * angle) * Math.sin(angle);
          context.lineTo(x, y);
          i++;
        }
        context.stroke();
      } else if (this.type === 1) {
        context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
      }
      context.closePath();
      context.restore();
    };

    update();
    document.body.style.backgroundColor = "#46ac46";

  });

  let errorsEl;

  console.clear();

  function init(){

    function checkIsColor( r, g, b, a ){
      return function( computedColor ){
        const rgbaRegex = /(rgba?)|(\d+(\.\d+)?%?)|(\.\d+)/g;
        const matchBorderColor = computedColor.match(rgbaRegex);
        if ( matchBorderColor ){
          const [ _, _r, _g, _b, _a ] = matchBorderColor;
          const hasAlpha = !!_a;
          const isAlpha1 = hasAlpha ? _a === ""+a : true;
          const isColorBlack = ( _r === ""+r && _g === ""+g && _b === ""+b && isAlpha1);
          if ( isColorBlack ){
            return true;
          }
        } 
        return false;
      }
    }

    const checkIsColorBlack = checkIsColor(0,0,0,1);
    const checkIsColorYellowGreen = checkIsColor(154,205,50,1);
    const checkIsColorTransparent = checkIsColor(0,0,0,0);

    function _checkIsColorBlack( computedColor ){
      const rgbaRegex = /(rgba?)|(\d+(\.\d+)?%?)|(\.\d+)/g;
      const matchBorderColor = computedColor.match(rgbaRegex);
      if ( matchBorderColor ){
        const [ _, r, g, b, a ] = matchBorderColor;
        const hasAlpha = !!a;
        const isAlpha1 = hasAlpha ? a === "1" : true;
        const isColorBlack = ( r === "0" && g === "0" && b === "0" && isAlpha1);
        if ( isColorBlack ){
          return true;
        }
      } 
      return false;
    
    }

    const details = document.querySelector("body details:first-of-type");
    const summary = details.querySelector("body details:first-of-type > summary"); 
    const summaries = Array.from(details.querySelectorAll("summary")).slice(1);
    const computedStyle = getComputedStyle(summary);
    const bgColor = computedStyle.backgroundColor;
    const isBgColorBlack = checkIsColorBlack(bgColor);
    if ( !isBgColorBlack ){
      throw new Error("Ops! Background color for the main <summary> element should be black!");
    } 
    if ( computedStyle.padding !== "16px" ){
      throw new Error("Ops! Padding for the main <summary> should be 16px!");
    }
    if ( computedStyle.borderWidth !== "4px" ){
      console.log(computedStyle.borderWidth);
      throw new Error("Ops! Border width for the main <summary> should be 2px!");
    }
    if ( computedStyle.borderStyle !== "solid" ){
      throw new Error("Ops! Border style for the main <summary> should be 'solid'!");
    }
    const isBorderColorYellowGreen = checkIsColorYellowGreen(computedStyle.borderColor);

    if ( !isBorderColorYellowGreen ){
        throw new Error("Ops! Border color for the main <summary> element should be yellowgreen!");
    } 

    summaries.forEach( s =>{
      const computedStyle = getComputedStyle(s);
      if (computedStyle.borderStyle !== "none"){
        throw new Error("Ops! The inner <summary> border style should not exist!");
      }
      if (computedStyle.borderWidth !== "0px"){
        throw new Error("Ops! The inner <summary> border width should be 10px!");
      }
      if (computedStyle.padding !== "0px"){
        throw new Error("Ops! The inner <summary> padding should be 0px!");
      }
      if (checkIsColorBlack(computedStyle.backgroundColor) ){
        throw new Error("Ops! The inner <summary> background color should not be black!");
      }
      if (checkIsColorBlack(computedStyle.borderColor) ){
        throw new Error("Ops! The inner <summary> border color should not be black!");
      }
      if ( !checkIsColorTransparent(computedStyle.backgroundColor) ){
        throw new Error("Ops! The inner <summary> background color should be transparent!");
      }
      
    })
  }
  document.addEventListener("DOMContentLoaded", e =>{

    const style = document.querySelector("#styles style");

    function doCheck(){
      try {
        errorsEl = document.querySelector("#errors");
        init();
        console.log("Everything looks good! Congratulations!");
        confettis();
        errorsEl.querySelector("p").textContent = "";
        errorsEl.removeAttribute("class");
        style.removeAttribute("contenteditable");
      } catch(e){
        document.body.style.backgroundColor = "tomato";
        errorsEl.querySelector("p").textContent = e.message;
        errorsEl.setAttribute("class", "active");
        console.log(e);
      }
    }

    doCheck();

    // const event = "input";
    const event = "keyup";
    style.addEventListener(event, e =>{
      console.log(e.type);
      doCheck();
    });

  });

}());
