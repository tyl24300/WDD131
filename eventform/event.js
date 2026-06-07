const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const code = document.querySelector("#access_code");
const student = document.querySelector("#student_id");
const output = document.querySelector("#output");
const inputc = document.querySelector("#code");
const inputs = document.querySelector("#student");

function updateNotesField() {
  const value = travelRange.value;

  if (value === "student") {
    student.hidden = false;
    code.hidden = true;
  } else if (value === "guest") {
    code.hidden = false;
    student.hidden = true;
  } else {
    code.hidden = true;
    student.hidden = true;
  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  
  if (type === "student" && inputs.value.length !== 9) {
    output.textContent = "The student ID# should be 9 digits."
    return;
  }

  if (type === "guest" && inputc.value !== "EVENT131") {
    output.textContent = "That is not the correct code."
    return;
  }
  

  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Event Date: ${availableDate}</p>
    <p>Type: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});
