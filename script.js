(function(){
    emailjs.init("E5BtfVnep1OK-lV_A");
})();

const form=document.querySelector(".contact-form");
const messageDiv=document.getElementById("form-message");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const emailInput=form.querySelector('input[name="email"]');
    form.querySelector('input[name="reply_to"]').value=emailInput.value;

    messageDiv.textContent="⏳Sending...";
    messageDiv.style.color="blue";

    emailjs.sendForm("service_ftofwvb","template_74zpfz1",this).then(function(){
        messageDiv.textContent = "✅ Message sent successfully!";
        messageDiv.style.color = "green";
        form.reset();

},function(error){
    messageDiv.textContent = "❌ Failed to send. Try again.";
      messageDiv.style.color = "red";
      console.error("EmailJS Error:", error);
    });
});
