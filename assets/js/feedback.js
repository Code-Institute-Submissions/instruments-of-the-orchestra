//Code below is based on the code used in the mini project from the Interactive Frontend Development module
const submitBtn = document.getElementById('submit-btn');

function sendMail(feedbackForm) {
    emailjs.send("gmail", "feedback_form", {
            "full_name": feedbackForm.name.value,
            "email_address": feedbackForm.email.value,
            "message": feedbackForm.message.value
        })
        .then(
            //Change button text to confirm feedback has been sent
            function (response) {
                submitBtn.innerHTML = `Thank you for your Feedback! <i class="fas fa-smile"></i>`;
            },
            //If feedback fails to send, change button text to ask user to try again
            function (error) {
                submitBtn.innerHTML = `Please Try Again <i class="fas fa-frown"></i>`;
            }
        );
    //Resets form after submission
    document.getElementById('feedback-form').reset();
    return false;
}