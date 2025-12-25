// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const output = document.getElementById("formMessage");

    if (!email.includes("@")) {
        output.style.color = "red";
        output.textContent = "Please enter a valid email address.";
        return;
    }

    if (message.length < 10) {
        output.style.color = "red";
        output.textContent = "Message must be at least 10 characters.";
        return;
    }

    output.style.color = "green";
    output.textContent = "Message sent successfully!";
});


// DARK MODE TOGGLE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
}

// LOAD DARK MODE SETTING
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}


// SHOW / HIDE CONTENT
document.getElementById("toggleBtn").addEventListener("click", function () {
    const info = document.getElementById("extraInfo");

    if (info.style.display === "none") {
        info.style.display = "block";
        this.textContent = "Show Less";
    } else {
        info.style.display = "none";
        this.textContent = "Show More";
    }
});
