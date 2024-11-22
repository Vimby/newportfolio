
const typewriter = new Typewriter("#typewriter", {
  strings: ["Web Developer", "Virtual Assistant", "Persuing Full Stack Web Development"],
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