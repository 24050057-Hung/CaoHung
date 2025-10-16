// Smooth scroll for older browsers (modern browsers support via CSS already)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form validation (client-side)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !phone || !message) {
      alert("Vui lòng điền đầy đủ tất cả các trường.");
      return;
    }

    alert("Cảm ơn bạn đã liên hệ! (Form demo - chưa gửi dữ liệu)");
    form.reset();
  });
}
