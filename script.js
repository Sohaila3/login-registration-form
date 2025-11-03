// إظهار / إخفاء الباسورد
let pwIcons = document.getElementsByClassName("showHidePw");
for (let i = 0; i < pwIcons.length; i++) {
    pwIcons[i].onclick = function () {
        let passwordInputs = this.parentElement.parentElement.getElementsByClassName("password");
        for (let j = 0; j < passwordInputs.length; j++) {
            if (passwordInputs[j].type === "password") {
                passwordInputs[j].type = "text";
                this.classList.remove("uil-eye-slash");
                this.classList.add("uil-eye");
            } else {
                passwordInputs[j].type = "password";
                this.classList.remove("uil-eye");
                this.classList.add("uil-eye-slash");
            }
        }
    }
}

// فتح صفحة التسجيل
document.querySelector(".signup-link").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".container").classList.add("active");
}

// الرجوع لصفحة تسجيل الدخول
document.querySelector(".login-link").onclick = function (e) {
    e.preventDefault();
    document.querySelector(".container").classList.remove("active");
}

// التحقق عند الضغط على Signup
document.querySelector(".signup .button input").onclick = function () {
    let name = document.querySelector(".signup input[placeholder='Enter your name']").value.trim();
    let email = document.querySelector(".signup input[placeholder='Enter your email']").value.trim();
    let password = document.querySelectorAll(".signup .password")[0].value.trim();
    let confirmPassword = document.querySelectorAll(".signup .password")[1].value.trim();

    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Signup successful!");
}

// التحقق عند الضغط على Login
document.querySelector(".login .button input").onclick = function () {
    let email = document.querySelector(".login input[placeholder='Enter your email']").value.trim();
    let password = document.querySelector(".login .password").value.trim();

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    alert("Login successful!");
}
