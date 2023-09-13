const test = require("node:test");
const { equal, deepStrictEqual } = require("node:assert");
const { getYouTubeListIdParts } = require("./index"); 

test('Testing getYouTubeListIdParts()', () => {

  const input1 = "https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=1&pp=iAQB";
  const output1 = [
    'https://www.youtube.com/watch?v=JZXQ455OT3A',
    '&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw',
    '&index=1&pp=iAQB'
  ];
  deepStrictEqual(output1, getYouTubeListIdParts(input1));
  
  const input2 = "https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw";
  const output2 =  [
    'https://www.youtube.com/playlist',
    '?list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw'
  ];
  deepStrictEqual(output2, getYouTubeListIdParts(input2));

});

// TODO: Test createFrontMatterMarkdownFromObject()