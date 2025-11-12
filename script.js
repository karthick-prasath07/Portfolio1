
// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu   = document.getElementById("mobileMenu");
const mobileMenuClose = document.getElementById("mobileMenuClose");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});
mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substr(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      window.scroll({
        top: targetEl.offsetTop - 80,
        behavior: "smooth"
      });
    }
    // close mobile menu if open
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });
});

