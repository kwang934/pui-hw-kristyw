const toggleswitch = document.querySelector("#mode-toggle");
let togglestate = 0; // 0 is light mode, 1 is dark mode

console.log(toggleswitch);

toggleswitch.onclick = function () {
  console.log("clicked the button");
  if (togglestate == 0) {
    togglestate = 1;
    toggleswitch.innerHTML =
      '<i class="fa-solid fa-sun"></i> Switch to Light Mode';
    let bodyelement = document.querySelector("body");
    bodyelement.classList.add("darkmode");
    let links = document.querySelectorAll("a");
    links.forEach((element) => {
      element.classList.add("darkmode-link");
    });
  } else {
    togglestate = 0;
    toggleswitch.innerHTML =
      '<i class="fa-solid fa-moon"></i> Switch to Dark Mode';
    let bodyelement = document.querySelector("body");
    bodyelement.classList.remove("darkmode");
    let links = document.querySelectorAll("a");
    links.forEach((element) => {
      element.classList.remove("darkmode-link");
    });
  }
};