import renderSearchResults from "./searchResults.js";

/**
 * Handle checkbox click events to filter resources.
 * @param {Object} resources - The resources object from JSON data.
 */
export function checkResult(resources) {
  document.querySelector(".job-wrapper").addEventListener("click", (event) => {

	const target = event.target;
	const hasResourceId = target.id.includes("resource");

	if (hasResourceId) {

	  let checkboxes = document.querySelectorAll(".job-wrapper input");
	  let checkedResult = {};
	  checkboxes.forEach((checkbox) => {
		const labelElement = document.querySelector(
		  `.type-container label[for='${checkbox.id}']`,
		);
		let checkedText = labelElement.textContent;
		if (checkbox.checked === true) {
		  Object.entries(resources).forEach(([key, value]) => {
			if (value.type === checkedText) {
			  checkedResult[key] = value;
			}
		  });
		}
	  });
	  console.log(checkedResult);// necessary to keep, to show the result.
	  renderSearchResults(checkedResult);
	}
  });
}