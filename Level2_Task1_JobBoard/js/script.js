```javascript
// ================================
// JobFinder - script.js
// ================================


// Search Jobs Function

function searchJobs() {

    let input = document.getElementById("searchInput");

    if (!input) return;

    let filter = input.value.toUpperCase();

    let cards = document.querySelectorAll(".job-card");

    cards.forEach(card => {

        let title = card.querySelector("h3");

        if (!title) return;

        let text = title.textContent.toUpperCase();

        if (text.indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

}


// Register Form Validation

const registerForm = document.querySelector(".auth-form");

if (window.location.href.includes("register.html")) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const password =
            document.querySelectorAll(
                ".auth-form input[type='password']"
            )[0].value;

        const confirmPassword =
            document.querySelectorAll(
                ".auth-form input[type='password']"
            )[1].value;

        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;
        }

        alert("Registration Successful!");

        window.location.href = "login.html";

    });

}


// Login Form

if (window.location.href.includes("login.html")) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Login Successful!");

        window.location.href =
            "candidate-dashboard.html";

    });

}


// Resume Upload

const fileInput =
    document.querySelector(
        "input[type='file']"
    );

if (fileInput) {

    fileInput.addEventListener("change", function () {

        if (this.files.length > 0) {

            alert(
                "Resume Selected: " +
                this.files[0].name
            );

        }

    });

}


// Employer Job Post Form

const jobForm =
    document.querySelector(".job-form");

if (jobForm) {

    jobForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Job Posted Successfully!"
        );

        jobForm.reset();

    });

}


// Apply Button

const applyButtons =
    document.querySelectorAll(".primary-btn");

applyButtons.forEach(btn => {

    btn.addEventListener("click", function () {

        if (
            this.textContent
                .trim()
                .includes("Apply")
        ) {

            alert(
                "Application Submitted Successfully!"
            );

        }

    });

});


// Animated Counter

const counters =
    document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            parseInt(
                counter.innerText
                    .replace(/\D/g, "")
            );

        let count = 0;

        const increment =
            Math.ceil(target / 100);

        const timer =
            setInterval(() => {

                count += increment;

                if (count >= target) {

                    count = target;

                    clearInterval(timer);

                }

                if (
                    counter.innerText.includes("K")
                ) {

                    counter.innerText =
                        count + "K+";

                } else {

                    counter.innerText =
                        count;

                }

            }, 20);

    };

    updateCounter();

});


// Smooth Scroll

document.querySelectorAll("a[href^='#']")
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }

    );

});


// Welcome Message

window.addEventListener("load", () => {

    console.log(
        "Welcome to JobFinder"
    );

});

```
