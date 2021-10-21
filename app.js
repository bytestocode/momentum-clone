const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.style.color = "blue";
  console.log("h1 was clicked!");
}

function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "mouse is out!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("offline!");
}

function handleWindowOnline() {
  alert("All good!");
}

h1.addEventListener("click", handleTitleClick);
// h1.onclick =  handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

