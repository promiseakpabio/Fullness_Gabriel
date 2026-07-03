const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        hamburger.style.display = "none";
    });
}

if (closeBtn && mobileMenu) {
    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        if (hamburger) hamburger.style.display = "block";
    });
}

function closeSection() {
    const el = document.getElementById("sub-section");
    if (el) el.style.display = "none";
}

/* Simple carousel auto-advance and active-dot handling */
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.carousel-slides');
    const dots = Array.from(document.querySelectorAll('.carousel-nav a'));

    if (slides && dots.length > 0) {
        let current = 0;
        const total = slides.children.length;

        function goTo(index){
            index = (index + total) % total;
            const width = slides.clientWidth;
            slides.scrollTo({left: width * index, behavior: 'smooth'});
            dots.forEach(d => d.classList.remove('active'));
            if (dots[index]) dots[index].classList.add('active');
            current = index;
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                goTo(i);
            });
        });

        let autoplay = setInterval(() => goTo(current + 1), 4500);

        slides.addEventListener('mouseenter', () => clearInterval(autoplay));
        slides.addEventListener('mouseleave', () => {
            autoplay = setInterval(() => goTo(current + 1), 4500);
        });

        goTo(0);
    }

    /* Contact form -> opens the user's email client with prefilled content */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
            const mailtoLink = `mailto:infofullnessgabriel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;
        });
    }

    /* Scroll-reveal animation for sections */
    const revealEls = document.querySelectorAll('.reveal');

    if (revealEls.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

        revealEls.forEach(el => observer.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('in-view'));
    }
});
