document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const sex = document.querySelector('input[name="sex"]:checked');
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const reason = document.getElementById("reason").value.trim();

    if (!firstName) {
        document.getElementById("errFirstName").textContent = "required";
        valid = false;
    }

    if (!lastName) {
        document.getElementById("errLastName").textContent = "required";
        valid = false;
    }

    if (!sex) {
        document.getElementById("errSex").textContent = "required";
        valid = false;
    }

    if (!email) {
        document.getElementById("errEmail").textContent = "required";
        valid = false;
    }

    if (!password) {
        document.getElementById("errPassword").textContent = "required";
        valid = false;
    }

    if (!reason) {
        document.getElementById("errReason").textContent = "required";
        valid = false;
    }

    if (valid) {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("sex", sex.value);
        localStorage.setItem("email", email);
        localStorage.setItem("reason", reason);
        window.location.href = "signupsummary.html";
    }
});
