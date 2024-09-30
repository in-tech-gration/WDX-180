function reddenPage() {
  // document.body.style.backgroundColor = 'red';
  // document.body.textContent = "Hello from Extension!";

  let total = 0;
  document.querySelectorAll("ytd-playlist-video-renderer .badge-shape-wiz__text").forEach(timeEl => {

    // console.log(t.textContent);
    // const time = "01:30:05"; // Testing
    const split = timeEl.textContent.split(":").reverse();
    split.forEach((t, index) => {
      total += Number(t) * Math.pow(60, index);
    });

  });

  // console.log(total);
  const seconds = total % 60;
  const minutes = Math.floor((total % 3600) / 60);
  const hours = Math.floor((total - minutes - seconds) / 3600);
  const totalDuration = `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;

  // console.log(totalDuration);

  document
    .querySelector(".metadata-stats")
    .insertAdjacentHTML("afterend",
      `
      <div style="font-style:bold; padding:1rem; padding-left:0">Total duration: ${totalDuration}</div>
  `)
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes('chrome://')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});
