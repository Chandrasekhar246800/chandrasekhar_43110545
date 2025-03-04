// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Register Form Submission (Demo)
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Registration Successful! Redirecting to Login...");
    window.location.href = "login.html";
});

// Login Form Submission (Demo)
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Login Successful! Redirecting to Home...");
    window.location.href = "index.html";
});
