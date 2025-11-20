const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);

const open1 = document.getElementById("open1");
const open2 = document.getElementById("open2");
const open3 = document.getElementById("open3");

const close1 = document.getElementById("close1");
const close2 = document.getElementById("close2");
const close3 = document.getElementById("close3");

const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");

function openPopup(popupEl) {
  if (!popupEl) return;
  popupEl.classList.add("open");
}
function closePopup(popupEl) {
  if (!popupEl) return;
  popupEl.classList.remove("open");
}

if (open1) open1.addEventListener("click", () => openPopup(popup1));
if (close1) close1.addEventListener("click", () => closePopup(popup1));

if (open2) open2.addEventListener("click", () => openPopup(popup2));
if (close2) close2.addEventListener("click", () => closePopup(popup2));

if (open3) open3.addEventListener("click", () => openPopup(popup3));
if (close3) close3.addEventListener("click", () => closePopup(popup3));
