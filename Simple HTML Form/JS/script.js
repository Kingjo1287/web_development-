document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var contact = document.getElementById("telNo").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var terms = document.getElementById("T&C").checked;

    if (fname === "") {
      alert("First Name is required.");
      return;
    }

    if (lname === "") {
      alert("Last Name is required.");
      return;
    }

    if (email === "") {
      alert("Email is required.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (contact === "") {
      alert("Contact is required.");
      return;
    }

    var contactPattern = /^\d+$/;

    if (!contactPattern.test(contact)) {
      alert("Invalid contact number.");
      return;
    }

    if (!gender) {
      alert("Please select a gender.");
      return;
    }

    if (!terms) {
      alert("You must accept the Terms and Conditions.");
      return;
    }

    alert(`Form submitted successfully!
\nFirst Name: ${fname}
Last Name: ${lname}
Email: ${email}
Password: ${password}
Contact: ${contact}
Gender: ${gender.value}
Terms and Conditions accepted: ${terms}`);

    form.reset();
  });
});
