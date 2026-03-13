
(function () {
    emailjs.init("JghsvFziuEDiNsa8b");
})();

const form = document.querySelector(".contactleft");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = form.querySelector('input[name="Email"]').value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(emailInput)) {
        alert("❌ Please enter a valid email address");
        return; 
    }

    emailjs.sendForm(
        "service_gt22vol",
        "template_q6nsbpf",
        this
    )
    .then(function () {
        alert("✅ Message sent successfully!");
        form.reset();
    })
    .catch(function (error) {
        alert("❌ Failed to send message");
        console.log(error);
    });
});