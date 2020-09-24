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
                // console.log('SUCCESS!', response.status, response.text)
            },
            function (error) {
                submitBtn.innerHTML = `Please Try Again <i class="fas fa-frown"></i>`;
                // console.log('FAILED...', error)
            }
        );
    return false;
}