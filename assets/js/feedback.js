//Code below is based on the code used in the mini project from the Interactive Frontend Development module
const submitBtn = document.getElementById('submit-btn');

function sendMail(contactForm) {
    emailjs.send("gmail", "feedback_form", {
            "full_name": contactForm.name.value,
            "email_address": contactForm.email.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                submitBtn.innerHTML = `Thank you for your Feedback! <i class="fas fa-smile"></i>`;
            },
            function (error) {
                submitBtn.innerHTML = `Please Try Again <i class="fas fa-frown"></i>`;
            }
        );
    return false;
}