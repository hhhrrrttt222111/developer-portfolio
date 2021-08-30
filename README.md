# Developer Portfolio 👾
## A responsive portfolio template for developers

<br />

## Table of Contents
- [Sections](#sections)
- [Demo](#demo)
- [Themes](#themes)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Hosting](#hosting)
- [SEO](#seo)
- [Packages Used](#packages-used)
- [APIs Used](#apis-used)
- [Fonts and Images](#fonts-and-images)
- [Upcoming Features](#upcoming-features)
- [Contributors](#contributors)

<br /><br />


# Sections
- HOME
- ABOUT
- RESUME
    - EDUCATION
    - SKILLS
    - EXPERIENCE
    - PROJECTS <br />
- SERVICES 
    - TESTIMONIALS <br />
- BLOG
- CONTACTS 

<br /><br />

# Demo
## View live demo [here](https://dev-portfolio-template.netlify.app/).

<br />

# Themes
### Green

<div style="display: flex; justify-content: space-between;">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/greenThemeLight.png" width="48%" alt="">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/greenThemeDark.png" width="48%" alt="">
</div>
<br />

### Black & White

<div style="display: flex; justify-content: space-between;">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/bwThemeLight.png" width="48%" alt="">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/bwThemeDark.png" width="48%" alt="">
</div>
<br />

### Blue

<div style="display: flex; justify-content: space-between;">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/blueThemeLight.png" width="48%" alt="">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/blueThemeDark.png" width="48%" alt="">
</div>

<br />

### Red

<div style="display: flex; justify-content: space-between;">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/redThemeLight.png" width="48%" alt="">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/redThemeDark.png" width="48%" alt="">
</div>

<br />

### Orange

<div style="display: flex; justify-content: space-between;">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/orangeThemeLight.png" width="48%" alt="">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/orangeThemeDark.png" width="48%" alt="">
</div>

<br />

### Purple

<div style="display: flex; justify-content: space-between;">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/purpleThemeLight.png" width="48%" alt="">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/purpleThemeDark.png" width="48%" alt="">
</div>

<br />

### Pink

<div style="display: flex; justify-content: space-between;">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/pinkThemeLight.png" width="48%" alt="">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/pinkThemeDark.png" width="48%" alt="">
</div>

<br />

### Yellow

<div style="display: flex; justify-content: space-between;">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/yellowThemeLight.png" width="48%" alt="">
    <img src="https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/themes/yellowThemeDark.png" width="48%" alt="">
</div>

<br /> <br />

# Installation
### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

## Also check [this](https://reactjs.org/docs/create-a-new-react-app.html) out if you are new to react.

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

<br />

# Getting Started
### Fork and Clone the repo

```
git clone hhttps://github.com/hhhrrrttt222111/developer-portfolio.git
cd developer-portfolio
```
### Install packages from the root directory
```
npm install
```
#### or
```
yarn install
```
### Start the development server
```
npm start
```
#### or
```
yarn start
```
<br />

# Folder Structure

```bash
├── LICENSE   
├── README.md        
├── package-lock.json
├── package.json     
├── public
│   ├── _redirects   
│   ├── favicon.ico  
│   ├── favicon.png
│   ├── favicon512.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── assets
│   │   ├── fonts
│   │   │   └── Bestermind
│   │   │       └── BestermindRegular.ttf
│   │   ├── pdf
│   │   │   └── resume.pdf
│   │   └── svg
│   │       ├── about
│   │       ├── contacts
│   │       ├── education
│   │       ├── experience
│   │       ├── projects
│   │       ├── skills
│   │       ├── social
│   │       └── testimonials
│   ├── components
│   │   ├── About
│   │   │   ├── About.css
│   │   │   └── About.js
│   │   ├── BackToTop
│   │   │   ├── BackToTop.css
│   │   │   └── BackToTop.js
│   │   ├── Blog
│   │   │   ├── Blog.css
│   │   │   ├── Blog.js
│   │   │   └── SingleBlog
│   │   │       ├── SingleBlog.css
│   │   │       └── SingleBlog.js
│   │   ├── Contacts
│   │   │   ├── Contacts.css
│   │   │   └── Contacts.js
│   │   ├── Education
│   │   │   ├── Education.css
│   │   │   ├── Education.js
│   │   │   └── EducationCard.js
│   │   ├── Experience
│   │   │   ├── Experience.css
│   │   │   ├── Experience.js
│   │   │   └── ExperienceCard.js
│   │   ├── Footer
│   │   │   ├── Footer.css
│   │   │   └── Footer.js
│   │   ├── Landing
│   │   │   ├── Landing.css
│   │   │   └── Landing.js
│   │   ├── Navbar
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.js
│   │   ├── Projects
│   │   │   ├── Projects.css
│   │   │   ├── Projects.js
│   │   │   └── SingleProject
│   │   │       ├── SingleProject.css
│   │   │       └── SingleProject.js
│   │   ├── Services
│   │   │   ├── Services.css
│   │   │   ├── Services.js
│   │   │   └── SingleService
│   │   │       ├── SingleService.css
│   │   │       └── SingleService.js
│   │   ├── Skills
│   │   │   ├── Skills.css
│   │   │   └── Skills.js
│   │   ├── Testimonials
│   │   │   ├── Testimonials.css
│   │   │   └── Testimonials.js
│   │   └── index.js
│   ├── contexts
│   │   └── ThemeContext.js
│   ├── data
│   │   ├── aboutData.js
│   │   ├── blogData.js
│   │   ├── contactsData.js
│   │   ├── educationData.js
│   │   ├── experienceData.js
│   │   ├── headerData.js
│   │   ├── projectsData.js
│   │   ├── servicesData.js
│   │   ├── skillsData.js
│   │   ├── socialsData.js
│   │   ├── testimonialsData.js
│   │   └── themeData.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Blog
│   │   │   ├── BlogPage.css
│   │   │   └── BlogPage.js
│   │   ├── Main
│   │   │   └── Main.js
│   │   ├── Project
│   │   │   ├── ProjectPage.css
│   │   │   └── ProjectPage.js
│   │   └── index.js
│   ├── reportWebVitals.js
│   ├── theme
│   │   ├── images.js
│   │   └── theme.js
│   └── utils
│       ├── ScrollToTop.js
│       └── skillsImage.js
└── yarn.lock
```
<br />

# Usage
### Customize your details for each component in `src/data` [folder](https://github.com/hhhrrrttt222111/developer-portfolio/tree/master/src/data).

Eg:
```javascript
export const headerData = {
    name: '-- YOUR NAME --',
    title: '-- YOUR TITLE --',
    desciption:'-- DESCRIPTION --',
    image: '-- IMAGE --',
    resumePdf: ''
}

// You can also import image and PDF from assets as shown below

import resume from '../assets/pdf/resume.pdf'
import profileImg from '../assets/png/profileImg'

export const headerData = {
    name: '-- YOUR NAME --',
    title: '-- YOUR TITLE --',
    desciption:'-- DESCRIPTION --',
    image: profileImg,
    resumePdf: resume
}
```

#### Data for each component is divided into respective files.
#### Set website theme in [`src/data/themeData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/themeData.js)

#### About You - [`src/data/aboutData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/aboutData.js)
#### Education details - [`src/data/educationData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/educationData.js) 
#### Enter your Projects - [`src/data/projectsData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/projectsData.js)
#### Add your Skills - [`src/data/skillsData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/skillsData.js)
#### Experience - [`src/data/experienceData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/experienceData.js)
#### Services - [`src/data/servicesData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/servicesData.js)
#### Testimonials - [`src/data/testimonialsData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/testimonialsData.js)
#### Your Blogs and Articles - [`src/data/blogData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/blogData.js)
#### Contact Details - [`src/data/contactsData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/contactsData.js)
#### Social Media Profiles - [`src/data/contactsData.js`](https://github.com/hhhrrrttt222111/developer-portfolio/blob/master/src/data/socialsData.js)

```javascript
// EXAMPLE
export const educationData = [
    {
        id: 1,
        institution: '-- INSTITUTION NAME --',
        course: '-- COURSE NAME --',
        startYear: '2017',
        endYear: '2019'
    },
    //
]
```

## Instructions and format for each section can be found inside the data files.

<br />

# Hosting
## Netlify
| Site   | Docs  | Demo  |
| :-------------: |:-------------: |:-------------: |
| [Netlify](https://www.netlify.com/) | [3 ways to deploy React apps to Netlify](https://blog.logrocket.com/3-ways-to-deploy-react-apps-to-netlify/) | [Youtube](https://www.youtube.com/watch?v=sGBdp9r2GSg) |
## Firebase
| Site   | Docs  | Demo  |
| :-------------: |:-------------: |:-------------: |
| [Firebase](https://firebase.google.com/docs/hosting) | [Deploy a React App with Firebase](https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425) | [Youtube](https://www.youtube.com/watch?v=1wZw7RvXPRU) |


## Heroku
| Site   | Docs  | Demo  |
| :-------------: |:-------------: |:-------------: |
| [Heroku](https://www.heroku.com/) | [Deploying React App on Heroku from GitHub](https://medium.com/make-it-heady/deploying-create-react-app-on-heroku-from-github-49447561f670) | [Youtube](https://www.youtube.com/watch?v=dn4mmfbletg) |

## Github Pages

<br />


# SEO
### Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. 
### Add the below code snippet to `public/index.html` with your site info. This step is not mandatory

<br />

```html
    <meta name="description" content="--- SITE DESCRIPTION ---" />
    <meta property="og:image" content="--- YOUR IMAGE ---">
    <meta property="og:site_name" content="--- YOUR NAME ---"/>
    <meta property="og:title" content="--- YOUR NAME ---"/>
    <meta property="og:url" content="--- YOUR SITE URL ---"/>
    <meta property="og:type" content="website"/>
    <meta property="og:description" content="--- SITE DESCRIPTION ---"/>
    <meta property="og:locale" content="---  ---">
    <meta property="og:image" content="--- YOUR IMAGE ---"/>
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    
    <meta itemprop="name" content="--- YOUR NAME ---"/>
    <meta itemprop="url" content="--- YOUR SITE URL ---"/>
    <meta itemprop="description" content="--- SITE DESCRIPTION ---"/>
    <meta itemprop="thumbnailUrl" content=""/>
    <link rel="image_src" href="--- YOUR IMAGE ---"/>
    <meta itemprop="image" content="--- YOUR IMAGE ---"/>
    
    <meta name="twitter:site" content="@--- YOUR TWITTER USERNAME ---">
    <meta name="twitter:creator" content="@--- YOUR TWITTER USERNAME ---">
    <meta name="twitter:url" content="--- YOUR SITE URL ---"/>
    <meta name="twitter:title" content="--- YOUR NAME ---">
    <meta name="twitter:description" content="--- SITE DESCRIPTION ---">
    <meta name="twitter:image" content="--- YOUR IMAGE ---">
    <meta name="twitter:card" content="summary"/>

```

<br />

# Packages Used

| Client Side Packages  |
| :-------------: |
| @material-ui/core  |
| @material-ui/icons  |
| axios |
| react-fast-marquee |
| react-helmet  |
| react-icons  |
| react-reveal |
| react-router-dom  |
| react-router-hash-link  |
| react-slick  |
| slick-carousel |
| validator |


<br />

# APIs Used



<br />

# Fonts and Images

## Illustrations
- [Icons8](https://icons8.com/illustrations/styles)
- [SVG Porn](https://svgporn.com/)

## Icons
- [Material Icons](https://material-ui.com/components/material-icons/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Fonts
- [Poppins](https://fonts.google.com/specimen/Poppins)
- [Big Shoulders Text](https://fonts.google.com/specimen/Big+Shoulders+Text)
- [Bestermind](https://www.dafont.com/bestermind.font)
- [Roboto](https://fonts.google.com/specimen/Roboto)

<br />

# Upcoming Features
- Light/Dark theme toggle
- More illustrations to choose from
- Achievements and Awards
- More fonts to choose from


<br /><br />

## Raise an issue for...
- New theme
- Can't find required skill in Skills section
- Add new social media profile
- Add new service
- Add another section





<br />

# Contributors

<div>
    <table>
        <tr>
            <td align="center"><a href="https://github.com/hhhrrrttt222111"><img src="https://hhhrrrttt222111.web.app/static/media/dp.5f7c380f.jpeg" width="135px;" height="135px;" alt=""/><br /><b>Hemanth R</b></a></td>
            <td align="center"><a href="https://github.com/ShimilSAbraham"><img src="https://raw.githubusercontent.com/ShimilSAbraham/Blender_Works/main/IMG_20210403_084810_715.jpg" width="135px;" height="135px; alt=""/><br /><b>Shimil S Abraham</b></a></td>
            <td align="center"><a href="https://github.com/Gayathry17"><img src="https://iamgayathrysuresh.web.app/static/media/gAvatar.37897d13.jpeg" width="135px;" height="135px; alt=""/><br /><b>Gayathry S</b></a></td>
        </tr>
    </table>
</div>