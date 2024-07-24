BakeMyDay

Welcome to BakeMyDay, your go-to website for all things baking! Whether you're a beginner looking to try your hand at baking or an experienced baker seeking new recipes and tips, BakeMyDay has something for everyone. This readme file provides an overview of the project's structure, features, and usage instructions.

Table of Contents
Overview
Features
Directory Structure
Installation
Contributing
Contact


Overview
BakeMyDay is a comprehensive baking website that offers a variety of recipes. Our mission is to inspire and guide bakers of all levels to create delicious baked goods with ease and confidence.

Features
Recipe Collection: A vast collection of recipes categorized by type and dietary restrictions (cakes, cookies, bread, vegan, gluten-free, dairy-free, etc.).
Contact us Form: A form to contact us any questions or queries you have. 
Login / Signup forms: login or sign up so you can save your favourite recipes
About: An about us page, why we decided to create BakeMyDay
Sitemap: Adding a sitemap to see all pages on the website 
Search Bar: search for your favourite recipes 
Social Media Icons: Check us out on Social Media! 
Share Icon: Share our website with your friends and Family

Directory Structure

BakeMyDay/
│
├── public/
│   ├── styles.css
│   └── images/
│       ├── sitelogo.png
│       └── favicon.ico
│
├── components/
│   ├── BackToTop.astro
│   ├── Header.astro
│   ├── Footer.astro
│   └── SocialMediaIcons.astro
│
├── layouts/
│   ├── layouts.astro
│
├── pages/
│   └── recipes/
│       ├── dairy-free.astro
│       ├── gluten-free.astro
│       ├── kid-friendly.astro
│       ├── recipes.astro
│       └── vegan.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── index.astro
│   ├── login.astro
│   ├── response.astro
│   ├── signup.astro
│   ├── signupconfirmation.astro
│   ├── sitemap.astro
│   └── terms.astro
│
├── services/
│   ├── api.js
│
└── README.md


Installation
To set up the BakeMyDay website locally, follow these steps:

Clone the repository:
git clone https://github.com/reillev123/final-project-1.git
cd BakeMyDay
Install dependencies:
npm install
Start the development server:
npm start
The website should now be running at http://localhost:4322/.


Contributing
We welcome contributions from the community! If you'd like to contribute to BakeMyDay, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/new-feature).
Make your changes and commit them (git commit -m 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Create a Pull Request.
Please ensure your code adheres to our coding standards and includes appropriate tests.

Contact
If you have any questions, feedback, or issues, please contact us at [EveReilly@bakemyday.com].

Thank you for using BakeMyDay! We hope our website helps you create delicious baked goods and enjoy the art of baking. Happy baking!

