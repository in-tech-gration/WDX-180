import { sidebarAPI } from "./sidebar.js";

/**
 * Handle search button click events to filter resources by title keyword.
 * @param {Object} data - The complete data object from JSON, including resources.
 */
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
		sidebarAPI(data, searchResult);
	});
}
