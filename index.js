
const typewriter = new Typewriter("#typewriter", {
  strings: ["Web Developer", "SEO Specialist", "Persuing Full Stack Web Development"],
  autoStart: true,
  loop: false, 
  cursor: "",
});

typewriter
  .callFunction(() => {
    
    document.getElementById("typewriter").innerHTML += " Front End Developer";
  })
  .start();

  // Display Current Year
 let date = new Date();
let year = date.getFullYear();
document.querySelector("#date").innerHTML = year;



//Contact Buttons

document.querySelector(".contact-me-btn").onclick = function () {
 
  const emailAddress = "vimbysbuzz@gmail.com";
  const subject = "Front End Developer Portfolio";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}`;

  // Open the mailto link
  window.location.href = mailtoLink;
};


// Send form data using EmailJS

  document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('contactForm').addEventListener('submit', function(event) {
                event.preventDefault();
            
    emailjs
      .sendForm("service_7p3behm", "template_zsd25ih", this)
      .then(() => {
        alert("Message sent successfully!");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Please try again.");
      });
  });

  })
