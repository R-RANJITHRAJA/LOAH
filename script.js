const hamburger = document.querySelector(".hamburger");
const navbar = document.getElementById("navbar");
hamburger.addEventListener("click", function() {
    if (navbar.style.display === "none") {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  });

  