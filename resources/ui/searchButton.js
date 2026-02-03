import { sidebarAPI } from "./sidebar.js";


export function searchButton(data) {
	let inputElement = document.querySelector(".alert input");
	let buttonElement = document.querySelector(".alert button");
	let searchResult;
	
	buttonElement.addEventListener("click", () => {
		searchResult = {};
		Object.entries(data.resources).forEach(([key, value]) => {
			if (key.includes(inputElement.value)) {
				searchResult[key] = value;
			}
		});
		console.log(sidebarAPI)
		sidebarAPI(data, searchResult);
	});
}
