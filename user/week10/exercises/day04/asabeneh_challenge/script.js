const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};

// console.log(asabenehChallenges2020);
// INSERT YOUR CODE HERE

function createTitleWrapper() {
	const titleWrapper = document.createElement("div");
	titleWrapper.id = "titleWrapper";
	wrapper.appendChild(titleWrapper);
}

function createTitle() {
	titleWrapper = document.querySelector("#titleWrapper")
	const h1 = document.createElement("h1");
	h1.innerHTML = `${asabenehChallenges2020.challengeTitle} in <span>${asabenehChallenges2020.challengeYear}</span>`;
	titleWrapper.appendChild(h1);
	const h2 = document.createElement("h2");
	h2.textContent = asabenehChallenges2020.challengeSubtitle;
	titleWrapper.appendChild(h2);
	const h3 = document.createElement("h3");
	h3.id = "timer";
	h3.textContent = "this is the timer";
	titleWrapper.appendChild(h3);
}

function createBodyWrapper() {
	const bodyWrapper = document.createElement("div");
	bodyWrapper.id = "bodyWrapper";
	wrapper.appendChild(bodyWrapper);
}

function createBody() {
	const bodyWrapper = document.querySelector("#bodyWrapper");
	const bodyUl = document.createElement("ul");
	bodyUl.id = "bodyUl";
	bodyWrapper.appendChild(bodyUl);
	asabenehChallenges2020.challenges.forEach(challenge => {
		// let li be a wrapper
		const li = document.createElement("li");
		li.id = challenge.name.replaceAll(" ", "_");
		bodyUl.appendChild(li);
		// create the first div to put the name
		const nameDiv = document.createElement("a");
		nameDiv.href = challenge.githubUrl;
		nameDiv.textContent = challenge.name;
		li.appendChild(nameDiv);
		// create the second div to put the key word
		const keywordDetial = document.createElement("details");
		const summery = document.createElement("summary");
		summery.textContent = `${challenge.topics[0]}`;
		keywordDetial.appendChild(summery);
		li.appendChild(keywordDetial);
		challenge.topics.forEach(topic => {
			const p = document.createElement("p");
			p.textContent = topic;
			keywordDetial.appendChild(p);
		});
		// create the third div to put the status
		const statusDiv = document.createElement("div");
		statusDiv.textContent = challenge.status;
		li.appendChild(statusDiv);
	});
}

function createAuthorWrapper() {
	const authorWrapper = document.createElement("div");
	authorWrapper.id = "authorWrapper";
	wrapper.appendChild(authorWrapper);
}

function createAuthor() {
	const authorWrapper = document.querySelector("#authorWrapper");
	// create the name of the author
	const h2 = document.createElement("h2");
	h2.id = "authorName";
	h2.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
	authorWrapper.appendChild(h2);
	// create the link of the author
	const head = document.querySelector("head");
	let temp = head.innerHTML;
	head.innerHTML = temp + `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">`;
	const socialLinks = document.createElement("div");
	authorWrapper.appendChild(socialLinks);
	asabenehChallenges2020.author.socialLinks.forEach(link => {
		const a = document.createElement("a");
		a.href = link.url;
		a.target = "_blank";
		a.innerHTML = link.fontawesomeIcon || link.social;
		socialLinks.appendChild(a);
	});
	const p = document.createElement("p");
	p.textContent = asabenehChallenges2020.author.bio;
	authorWrapper.appendChild(p);
}

function createFooterWrapper() {
	const footerWrapper = document.createElement("div");
	footerWrapper.id = "footerWrapper";
	wrapper.appendChild(footerWrapper);
}

function createFooter() {
	const footerWrapper = document.querySelector("#footerWrapper");
	// first list
	const ul1 = document.createElement("ul");
	ul1.textContent = "titles";
	footerWrapper.appendChild(ul1);
	asabenehChallenges2020.author.titles.forEach(title => {
		const li = document.createElement("li");
		li.textContent = `${title[0]} ${title[1]}`;
		ul1.appendChild(li);
	});
	// second list
	const ul2 = document.createElement("ul");
	ul2.textContent = "skills";
	footerWrapper.appendChild(ul2);
	asabenehChallenges2020.author.skills.forEach(skill => {
		const li = document.createElement("li");
		li.textContent = `${skill}`;
		ul2.appendChild(li);
	})
	// third list
	const ul3 = document.createElement("ul");
	ul3.textContent = "qualifications";
	footerWrapper.appendChild(ul3);
	asabenehChallenges2020.author.qualifications.forEach(qualification => {
		const li = document.createElement("li");
		li.textContent = `${qualification}`;
		ul3.appendChild(li);
	});
}

function createKeywordsWrapper() {
	const keywordsWrapper = document.createElement("div");
	keywordsWrapper.id = "keywordsWrapper";
	wrapper.appendChild(keywordsWrapper);
}

function createKeywords() {
	const keywordsWrapper = document.querySelector("#keywordsWrapper");
	const ul = document.createElement("ul");
	keywordsWrapper.appendChild(ul);
	ul.textContent = "Keywords: ";
	asabenehChallenges2020.keywords.forEach(keyword => {
		const li = document.createElement("li");
		li.textContent = keyword;
		ul.appendChild(li);
	});
}

function updateDateTime() {
	const now = new Date();
	const currentDateTime = now.toLocaleString();
	document.querySelector('#timer').textContent = currentDateTime;
	document.querySelector('h1 span').style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
	document.querySelector('#timer').style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

/*--------------------------------style-----------------------------*/

function setPageStyle() {
	const wrapper = document.querySelector(".wrapper");
	wrapper.style.maxWidth = "1100px";
	wrapper.style.margin = "0 auto";
	wrapper.style.padding = "20px";
	wrapper.style.boxSizing = "border-box";
	wrapper.style.fontFamily = "Arial, sans-serif";
}

function setTitleStyle() {
	const titleWrapper = document.querySelector("#titleWrapper");
	titleWrapper.style.border = "2px solid black";
	titleWrapper.style.display = "flex";
	titleWrapper.style.flexDirection = "column";
	titleWrapper.style.alignItems = "center";
	titleWrapper.style.justifyContent = "center";
	titleWrapper.style.padding = "20px";
	titleWrapper.style.marginBottom = "20px";
	const h1 = document.querySelector("#titleWrapper h1");
	h1.style.textAlign = "center";
	h1.style.fontFamily = "Arial, sans-serif";
	h1.style.margin = "0";
	const h2 = document.querySelector("#titleWrapper h2");
	h2.style.textAlign = "center";
	h2.style.fontFamily = "Arial, sans-serif";
	h2.style.textDecoration = "underline";
	h2.style.fontWeight = "normal";
	h2.style.margin = "0";
	const h3 = document.querySelector("#titleWrapper h3");
	h3.style.textAlign = "center";
	h3.style.fontFamily = "Arial, sans-serif";
	h3.style.margin = "0";
	h3.style.width = "250px";
}

function setBodyStyle() {
	const bodyWrapper = document.querySelector("#bodyWrapper");
	bodyWrapper.style.border = "2px solid black";
	const bodyUl = document.querySelector("#bodyUl");
	bodyUl.style.listStyleType = "none";
	bodyUl.style.padding = "0";
	const lis = document.querySelectorAll("#bodyUl li");
	lis.forEach(li => {
		li.style.border = "1px solid gray";
		li.style.margin = "10px";
		li.style.padding = "10px";
		li.style.display = "flex";
		li.style.justifyContent = "space-between";
		li.style.alignItems = "center";
		li.style.fontFamily = "Arial, sans-serif";
		if (li.children[2].textContent === "Done") {
			li.style.backgroundColor = "lightgreen";
		} else if (li.children[2].textContent === "Ongoing") {
			li.style.backgroundColor = "lightyellow";
		} else {
			li.style.backgroundColor = "lightcoral";
		}
	});
}

function setAuthorStyle() {
	const authorWrapper = document.querySelector("#authorWrapper");
	authorWrapper.style.border = "2px solid black";
	authorWrapper.style.display = "flex";
	authorWrapper.style.flexDirection = "column";
	authorWrapper.style.alignItems = "center";
	authorWrapper.style.justifyContent = "center";
	authorWrapper.style.padding = "20px";
	authorWrapper.style.marginTop = "20px";
	const authorName = document.querySelector("#authorName");
	authorName.style.fontFamily = "Arial, sans-serif";
	authorName.style.textAlign = "center";
	const socialLinks = authorWrapper.querySelectorAll("a");
	socialLinks.forEach(link => {
		link.style.margin = "0 20px";
		link.style.fontSize = "36px";
		link.style.color = "black";
		link.style.textDecoration = "none";
	});
	const bio = authorWrapper.querySelector("p");
	bio.style.fontFamily = "Arial, sans-serif";
	bio.style.textAlign = "center";
}

function setFooterStyle() {
	const footerWrapper = document.querySelector("#footerWrapper");
	footerWrapper.style.border = "2px solid black";
	footerWrapper.style.display = "flex";
	footerWrapper.style.justifyContent = "space-around";
	footerWrapper.style.padding = "20px";
	footerWrapper.style.marginTop = "20px";
	const uls = footerWrapper.querySelectorAll("ul");
	uls.forEach(ul => {
		ul.style.listStyleType = "none";
		ul.style.padding = "0";
		ul.style.fontFamily = "Arial, sans-serif";
		ul.style.fontWeight = "bold";
	});
	const lis = footerWrapper.querySelectorAll("ul li");
	lis.forEach(li => {
		li.style.fontWeight = "normal";
		li.style.marginTop = "10px";
	});
}

function setKeywordsStyle() {
	const keywordsWrapper = document.querySelector("#keywordsWrapper");
	keywordsWrapper.style.border = "2px solid black";
	keywordsWrapper.style.marginTop = "20px";
	keywordsWrapper.style.padding = "20px";
	const ul = keywordsWrapper.querySelector("ul");
	ul.style.listStyleType = "none";
	ul.style.padding = "0";
	ul.style.display = "flex";
	ul.style.flexWrap = "wrap";
	ul.style.justifyContent = "center";
	ul.style.alignItems = "center";
	ul.style.fontWeight = "bold";
	ul.style.fontFamily = "Arial, sans-serif";
	ul.style.fontSize = "18px";
	const lis = ul.querySelectorAll("li");
	lis.forEach(li => {
		li.style.border = "1px solid gray";
		li.style.borderRadius = "5px";
		li.style.padding = "5px 10px";
		li.style.margin = "5px";
		li.style.fontFamily = "Arial, sans-serif";
		li.style.fontWeight = "normal";
		li.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
		li.style.hover = "pointer";
	});
}

const wrapper = document.querySelector(".wrapper");
createTitleWrapper();
createTitle();
createBodyWrapper();
createBody();
createAuthorWrapper();
createAuthor();
createFooterWrapper();
createFooter();
createKeywordsWrapper();
createKeywords();
setInterval(updateDateTime, 1000);
// set the style
setPageStyle();
setTitleStyle();
setBodyStyle();
setAuthorStyle();
setFooterStyle();
setKeywordsStyle();