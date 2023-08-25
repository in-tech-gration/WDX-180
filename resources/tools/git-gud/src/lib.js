mergeInto(LibraryManager.library, {
  draw_bg: function(numColumns, currentCol, currentHeadId) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save(); // horizontal shift
    ctx.translate(mx - currentCol * COL_WIDTH + canvas.width / 2 - COL_WIDTH / 2, 0);

    ctx.beginPath();
    ctx.strokeStyle = AMBER;
    ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
    ctx.lineWidth = 1;

    ctx.moveTo(COL_WIDTH * currentCol, 0);
    ctx.lineTo(COL_WIDTH * currentCol, canvas.height);
    ctx.moveTo(COL_WIDTH * (currentCol+1), 0);
    ctx.lineTo(COL_WIDTH * (currentCol+1), canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.save();
    ctx.resetTransform();
    ctx.beginPath();
    ctx.rect(0, 19, canvas.width, canvas.height);
    ctx.restore();

    ctx.save(); // vertical shift + clip
    ctx.clip();
    ctx.translate(0, my - currentHeadId * ROW_HEIGHT + canvas.height / 2 - ROW_HEIGHT);
  },

  draw_commit_circle: function(ID, x, y, isHead) {
    // head and non-head drawn differently
    if (isHead) {
      ctx.beginPath();
      ctx.arc(centerX(x), centerY(y), CIRCLE_RADIUS * 0.75, 0, 2 * Math.PI);
      ctx.fillStyle = AMBER;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX(x), centerY(y), CIRCLE_RADIUS, 0, 2 * Math.PI);
      ctx.stokeStyle = AMBER;
      ctx.lineWidth = 3;
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(centerX(x), centerY(y), CIRCLE_RADIUS, 0, 2 * Math.PI);
      ctx.strokeStyle = AMBER;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = AMBER;
      ctx.fill();
    }

    // Draw the commit ID in the center
    ctx.font = "10px monospace";
    ctx.textBaseline = "middle"; 
    ctx.fillStyle = "black"
    var text = "c" + ID.toString();
    var leftOffset = ctx.measureText(text).width / 2;
    ctx.fillText(text, centerX(x) - leftOffset, centerY(y));
  },
  
  connect_circles: function(topX, topY, botX, botY, isMerge) {
    ctx.beginPath();
    // move to middle bottom of first circle
    ctx.moveTo(centerX(topX), centerY(topY) + CIRCLE_RADIUS);

    // If botX == botY, it's a straight line
    if (botX == topX) {
      ctx.lineTo(centerX(botX), centerY(botY) - CIRCLE_RADIUS);
    } else if (isMerge && botX > topX) {
      ctx.lineTo(centerX(topX), centerY(botY) - CIRCLE_RADIUS - VERT_MARGIN - LINE_ARC_RADIUS);
      ctx.arc(centerX(topX) + LINE_ARC_RADIUS,
              centerY(botY) - CIRCLE_RADIUS - VERT_MARGIN - LINE_ARC_RADIUS,
              LINE_ARC_RADIUS,
              Math.PI, Math.PI/2, true);
      ctx.lineTo(centerX(botX) - LINE_ARC_RADIUS,
                 centerY(botY) - CIRCLE_RADIUS - (VERT_MARGIN));
      ctx.arc(centerX(botX) - LINE_ARC_RADIUS,
              centerY(botY) - CIRCLE_RADIUS - LINE_ARC_RADIUS,
              LINE_ARC_RADIUS,
              1.5*Math.PI,
              0);
      ctx.lineTo(centerX(botX), centerY(botY) - CIRCLE_RADIUS);
    } else if (isMerge && botX < topX) {
      ctx.lineTo(centerX(topX), centerY(botY) - CIRCLE_RADIUS - VERT_MARGIN - LINE_ARC_RADIUS);
      ctx.arc(centerX(topX) - LINE_ARC_RADIUS,
              centerY(botY) - CIRCLE_RADIUS - VERT_MARGIN - LINE_ARC_RADIUS,
              LINE_ARC_RADIUS,
              0, Math.PI / 2);
      ctx.lineTo(centerX(botX) + LINE_ARC_RADIUS,
                 centerY(botY) - CIRCLE_RADIUS - (VERT_MARGIN));
      ctx.arc(centerX(botX) + LINE_ARC_RADIUS,
              centerY(botY) - CIRCLE_RADIUS - LINE_ARC_RADIUS,
              LINE_ARC_RADIUS,
              1.5*Math.PI, Math.PI, true);
      ctx.lineTo(centerX(botX), centerY(botY) - CIRCLE_RADIUS);
    } else if (botX > topX) {
      ctx.lineTo(centerX(topX), centerX(topY) + CIRCLE_RADIUS + LINE_ARC_RADIUS);
      ctx.arc(centerX(topX) + LINE_ARC_RADIUS,
              centerY(topY) + CIRCLE_RADIUS + LINE_ARC_RADIUS,
              LINE_ARC_RADIUS,
              Math.PI, Math.PI / 2, true); // counterclockwise
      ctx.lineTo(centerX(botX) - LINE_ARC_RADIUS, centerY(topY) + CIRCLE_RADIUS + (VERT_MARGIN));
      ctx.arc(centerX(botX)-LINE_ARC_RADIUS,
              centerY(topY) + CIRCLE_RADIUS + VERT_MARGIN + LINE_ARC_RADIUS,
              LINE_ARC_RADIUS,
              1.5 * Math.PI, 0);
      ctx.lineTo(centerX(botX), centerY(botY) - CIRCLE_RADIUS);
    }

    ctx.strokeStyle = AMBER;
    ctx.lineWidth = 2;
    ctx.stroke();
  },

  end_draw: function(numColumns) {
    ctx.restore(); // vertical shift + clip
    for (let i = 0; i < numColumns; ++i) {
      // Draw the branch ID in the center
      ctx.font = "bold 14px monospace"; 
      let text = "b" + i.toString();
      let leftOffset = ctx.measureText(text).width / 2;
      ctx.fillStyle = AMBER;
      ctx.fillText(text, (COL_WIDTH * i) + COL_WIDTH / 2 - leftOffset, 14);
    }

    ctx.beginPath();
    ctx.strokeStyle = AMBER;
    ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
    ctx.lineWidth = 1;

    ctx.moveTo(0, 18);
    ctx.lineTo(COL_WIDTH * numColumns, 18);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore(); // horizontal shift

  },

  main_done: function() {
    Module._draw();
    window.addEventListener('resize', Module._draw);
  },

  print: function(what) {
    console.log(UTF8ToString(what));
  },
});
