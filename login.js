const validPremiumPasswords = ["trust2024", "premium2024", "vipaccess"]; // Premium şifreler
const validPasswords = ["12345", "admin"]; // Geçerli şifreler

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const password = document.getElementById("password").value.trim();

    if (password === "") {
        document.getElementById("error-message").textContent = "Don't Forget to Enter Password!";
        return;
    }

    if (validPremiumPasswords.includes(password)) {
        window.location.href = "premium/wallet.html"; // Premium şifrelerle yönlendirme
    } else if (validPasswords.includes(password)) {
        window.location.href = "wallet.html"; // Diğer geçerli şifrelerle yönlendirme
    } else {
        document.getElementById("error-message").textContent = "Invalid Login Key, Try Again!";
    }
});
