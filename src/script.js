// Get form elements
const form = document.getElementById("donationForm");
const thankYouMessage = document.getElementById("thankYouMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page reload

    // Get values
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;
    const bloodgroup = document.getElementById("bloodgroup").value;
    const address = document.getElementById("address").value.trim();

    // Validation
    if (name === "" || mobile === "" || age === "" || gender === "" || bloodgroup === "" || address === "") {
        alert("Please fill all details!");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter valid 10-digit mobile number!");
        return;
    }

    if (age < 18 || age > 60) {
        alert("Age must be between 18 and 60 for donation!");
        return;
    }

    // Show Thank You Message
    thankYouMessage.style.display = "block";
    thankYouMessage.innerHTML =
        "✅ Thank you " + name + 
        " for registering!<br>Blood Donation Camp Test Team appreciates your support ❤️";

    // Reset Form
    form.reset();
});
