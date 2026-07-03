# Fullness Gabriel — Official Website

A responsive, animated website for **Fullness Gabriel** — worship minister, vocal coach, creative strategist, and mentor. Built to reflect the brand's identity through a warm burnt-orange-to-black gradient theme, elegant typography, and smooth scroll-based motion.

Live site:

---

Overview

This site introduces Fullness Gabriel's ministry and creative work, sharing his vision, mission, and core values, and giving visitors a simple way to connect for bookings, mentorship, or partnership.

It's built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step — so it's easy to host anywhere and simple to edit directly.

Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero introduction, ministry overview, photo carousel, and a closing partnership call-to-action. |
| About | `About_page.html` | Full bio, vision & mission, core values, services ("What I Do"), signature initiatives, testimonials, and booking availability. |
| Contact | `Contact_page.html` | Direct contact cards (email, WhatsApp, phone), a message form, and social links. |

Design

- Color palette — a burnt-orange → black gradient runs throughout the site, with a soft gold accent for highlights, dividers, and hover states.
- Typography — [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) for headings, paired with [Poppins](https://fonts.google.com/specimen/Poppins) for body text and navigation.
- Motion — scroll-triggered fade-ups, hover lifts/glows on cards and images, animated nav underlines, and a hero entrance animation. All motion respects `prefers-reduced-motion` for accessibility.
- Responsive layout — mobile-first, with dedicated desktop breakpoints for the navbar, hero, content grids, and footer.

Built With

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript
- [Font Awesome](https://fontawesome.com/) — icons
- [Google Fonts](https://fonts.google.com/) — Playfair Display & Poppins

Project Structure

```
├── index.html            # Home page
├── About_page.html        # About page
├── Contact_page.html      # Contact page
├── styles.css             # All site styling (shared across pages)
├── script.js               # Navigation, carousel, scroll reveal, contact form logic
├── logo.jpg                 # Site logo
└── (photo assets)           # Hero, gallery, and content images
```

Getting Started

No build tools or dependencies required.

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Open `index.html` directly in your browser, **or** serve it locally:
   ```bash
   npx serve .
   ```
3. Make sure all referenced images (`logo.jpg`, hero/gallery photos, etc.) are placed in the project root alongside the HTML files.

## ⚙️ Key Features

- **Mobile slide-in menu** with social links and a quick "Get In Touch" action
- **Auto-advancing image carousel** with clickable navigation dots, pausing on hover
- **Scroll-reveal animations** powered by `IntersectionObserver`
- **Contact form** that opens the visitor's email client with a prefilled message — no backend required
- **Reusable design system** (buttons, cards, section headers) shared consistently across all three pages

Adding Images

The About page includes two clearly marked placeholder sections for additional photos. To add your own:

1. Open `About_page.html` and find the `<!-- OPTIONAL IMAGE 1 -->` / `<!-- OPTIONAL IMAGE 2 -->` comments.
2. Delete the `.image-placeholder-box` div.
3. Replace it with:
   ```html
   <img src="your-photo.jpg" alt="Description of the photo">
   ```

The image will automatically pick up the site's rounded corners, shadow, and hover animation.

 Contact

For inquiries, bookings, or partnerships:

- **Email:** infofullnessgabriel@gmail.com
- **WhatsApp/Phone:** +234 814 823 6765

## License

© 2026 Fullness Gabriel Ministries. All rights reserved.
