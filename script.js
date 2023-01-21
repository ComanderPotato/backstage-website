"use strict";
const sectionEl = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let issueNum = entry.target.getAttribute("data-issue");
            let scroll = entry.target.getBoundingClientRect().top -
                document.body.getBoundingClientRect().top;
            window.scrollTo({
                top: scroll,
                behavior: "smooth",
            });
            document.body.style.backgroundColor = `var(--issue-${issueNum}`;
        }
    });
}, { threshold: 0.05 });
window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        document.body.style.backgroundColor = "white";
    }
});
sectionEl.forEach((el) => observer.observe(el));
