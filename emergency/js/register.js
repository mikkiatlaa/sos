const form = document.getElementById("form");
const summary = document.getElementById("summary-section");

const childNameOutput = document.querySelector("#child_name_output");
const childAgeOutput = document.querySelector("#child_age_output");
const daysCriedOutput = document.querySelector("#days_cried_output");
const childFilesOutput = document.querySelector("#child_files_output");
const parentNameOutput = document.querySelector("#parent_name_output");
const parentAgeOutput = document.querySelector("#parent_age_output");
const parentFilesOutput = document.querySelector("#parent_files_output");
const withoutSleepOutput = document.querySelector("#without_sleep_output");
const emailOutput = document.querySelector("#email_output");
const mobileOutput = document.querySelector("#mobile_output");
const hvorforOutput = document.querySelector("#hvorfor_output");

function cancelPopup(event) {
  event.preventDefault();
  const firstInvalid = form.querySelector(":invalid");
  if (firstInvalid) firstInvalid.focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen

  const formData = new FormData(form);
  const childName = formData.get("child_name");
  const childAge = formData.get("child_age");
  const daysCried = formData.get("days_cried");
  const childFiles = formData.get("child_files");
  const parentName = formData.get("parent_name");
  const parentAge = formData.get("parent_age");
  const withoutSleep = formData.get("days_without_sleep");
  const parentFiles = formData.get("parent_files");
  const email = formData.get("email");
  const mobile = formData.get("mobile");
  const hvorfor = formData.getAll("hvorfor").join(", ");

  // 2. Vis værdierne i de rigtige output-felter

  childNameOutput.textContent = childName;
  childAgeOutput.textContent = childAge;
  daysCriedOutput.textContent = daysCried;
  childFilesOutput.textContent = childFiles;
  parentNameOutput.textContent = parentName;
  parentAgeOutput.textContent = parentAge;
  withoutSleepOutput.textContent = withoutSleep;
  parentFilesOutput.textContent = parentFiles;
  emailOutput.textContent = email;
  mobileOutput.textContent = mobile;
  hvorforOutput.textContent = hvorfor;

  if (summary) summary.classList.add("visible");

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
