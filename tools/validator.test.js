const test = require("node:test");
const { equal, deepEqual } = require("node:assert");
const { getDailyContent } = require("./validator");

test("getDailyContent() works", ()=>{

  const input = `
  # Week 2 | HTML, Accessibility & Git
  
  _(Updated: 25/08/2023)_
  
  ## Week 2 - Day 1 | Git
  
    ### Schedule
  
    ### Study Plan
  
    **What you'll learn:**
  
    ### Summary
  
    ### Exercises
  
    ### [Extra Resources](EXTRAS.md)
  
    ### Sources and Attributions
  
  ## Week 2 - Day 2 | HTML
    
    ### Sources and Attributions
  
  ## Week 2 - Day 3 | Tables
    
    ### Sources and Attributions
  
  ## Week 2 - Day 4 | Forms
    
    ### Sources and Attributions
  
  ## Week 2 - Day 5 | SVG & MathML
    
    ### Sources and Attributions
  
  **Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your **mandatory** feedback form before the day ends. Thanks you! 
  
  ## Week 2 - Weekend Suggestions
  
  If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).
  `
  
  const output = [
    '  ### Schedule\n' +
      '  ### Study Plan\n' +
      "  **What you'll learn:**\n" +
      '  ### Summary\n' +
      '  ### Exercises\n' +
      '  ### [Extra Resources](EXTRAS.md)\n' +
      '  ### Sources and Attributions\n',
    '  ### Sources and Attributions\n',
    '  ### Sources and Attributions\n',
    '  ### Sources and Attributions\n',
    '  ### Sources and Attributions\n' +
      "**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your **mandatory** feedback form before the day ends. Thanks you! \n"
  ];
  
  deepEqual(getDailyContent(input.split("\n")), output); 

});
