const html = `
  <div class="dark-light">
    <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  </div>
  <div class="user-menu">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="feather feather-square">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
  </div>
  <img class="user-profile"
    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="">
  <div class="user-name">Suhayel Nasim</div>
`
const userSettingsEl = document.querySelector(".user-settings");

userSettingsEl.innerHTML = html;

const toggleButton = document.querySelector(".dark-light");
document.body.classList.add("dark-mode");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}
toggleButton.addEventListener("click", toggleDarkMode);
