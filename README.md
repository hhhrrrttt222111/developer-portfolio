# Developer Portfolio

A personal portfolio website built with **React 19** and **Vite**, showcasing your skills, projects, and professional journey. This project is a fork of the original developer-portfolio by **hhhrrrttt222111**, updated to use modern tooling while retaining the original CSS styling.

---

## Sections 🔖

* HOME
* ABOUT
* RESUME
* EDUCATION
* SKILLS
* EXPERIENCE
* PROJECTS
* ACHIEVEMENTS
* SERVICES
* TESTIMONIALS
* BLOG
* CONTACTS

---

## Demo 🎥

\[Demo Coming Soon]

---

## Themes 🎨

\[Describe any themes you’ve implemented or reuse the original themes if unchanged]

---

## Installation ⬇️

### Prerequisites

Ensure you have the latest versions of Git and Node.js installed on your computer:

```bash
node --version
git --version
```

### Getting Started 🎯

#### Clone the Repository

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/developer-portfolio.git
cd developer-portfolio
```

#### Install Dependencies

```bash
npm install
```

#### Start the Development Server

```bash
npm run dev
```

This will start the Vite development server, and you can view your portfolio at `http://localhost:5173`.

---

## Folder Structure 📂

```
├── LICENSE
├── README.md
├── package.json
├── vite.config.js
├── public
│   ├── favicon.ico
│   ├── favicon.png
│   ├── favicon512.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   ├── fonts/Bestermind/BestermindRegular.ttf
│   │   ├── pdf/resume.pdf
│   │   └── svg/
│   │       ├── about
│   │       ├── contacts
│   │       ├── education
│   │       ├── experience
│   │       ├── projects
│   │       ├── skills
│   │       ├── social
│   │       └── testimonials
│   ├── components/...
│   ├── contexts/ThemeContext.jsx
│   ├── data/...
│   ├── index.css
│   ├── main.jsx
│   ├── pages/...
│   ├── reportWebVitals.js
│   ├── theme/...
│   └── utils/...
```

---

## Usage 🕹️

### Customize Your Details

Update the data files in `src/data` to personalize your portfolio.

Example: `headerData.js`

```javascript
import resume from '../assets/pdf/resume.pdf';
import profileImg from '../assets/png/profileImg';

export const headerData = {
    name: 'Your Name',
    title: 'Your Title',
    description: 'Your description here',
    image: profileImg,
    resumePdf: resume
};
```

### Social Media Profiles

Edit `src/data/contactsData.js` to include your social media links.

### Education Data

```javascript
export const educationData = [
    {
        id: 1,
        institution: 'Your Institution Name',
        course: 'Your Course Name',
        startYear: '2017',
        endYear: '2021'
    }
];
```

### Contact Form 📩

\[Add instructions for setting up the contact form if implemented]

---

## Hosting 🌐

* **Netlify**: [Docs](https://docs.netlify.com) | [Deploy Guide](https://docs.netlify.com/site-deploys/create-deploys/)
* **Vercel**: [Docs](https://vercel.com/docs) | [Deploy Guide](https://vercel.com/docs/concepts/deployments)
* **GitHub Pages**: [Docs](https://docs.github.com/en/pages)
* **Firebase**: [Docs](https://firebase.google.com/docs)

---

## SEO 🕷️

Update `public/index.html` with your site information using meta tags for description, open graph, and Twitter cards.

---

## Packages Used 📦

* @material-ui/core
* @material-ui/icons
* axios
* react-fast-marquee
* react-helmet
* react-icons
* react-reveal
* react-router-dom
* react-router-hash-link
* react-slick
* slick-carousel
* validator

---

## Fonts and Images 🎭

* **Font**: Bestermind (`src/assets/fonts/Bestermind`)
* **Images**: Stored in `src/assets/svg` and `src/assets/png`

---

## Upcoming Features 🚧

* Light/Dark theme toggle
* Additional illustrations
* More font options

---

## Issues

Raise an issue on GitHub for:

* Bugs
* New theme suggestions
* Missing skills
* Adding new social media profiles
* Adding new services or sections

---

## License

This project is licensed under the **Apache License 2.0**. See the LICENSE file for details.

---

## Acknowledgments

This portfolio is based on the original developer-portfolio by **hhhrrrttt222111**. Thanks to the original contributors for providing a solid foundation.
