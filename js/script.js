// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // On mobile, tapping "Work" expands its submenu instead of relying on hover
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    const trigger = dropdown.querySelector("a");
    if (trigger) {
      trigger.addEventListener("click", (e) => {
        if (window.innerWidth <= 700) {
          e.preventDefault();
          dropdown.classList.toggle("open");
        }
      });
    }
  }

  // Fade-in animation for work grid items as they scroll into view
  const items = document.querySelectorAll(".work-item");
  if (items.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => observer.observe(item));
  } else {
    items.forEach((item) => item.classList.add("in-view"));
  }
});
