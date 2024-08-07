BakeMyDay

Welcome to BakeMyDay, your go-to website for all things baking! Whether you're a beginner looking to try your hand at baking or an experienced baker seeking new recipes and tips, BakeMyDay has something for everyone. This readme file provides an overview of the project's structure, features, and usage instructions.

Table of Contents
Overview
Features
Directory Structure
Installation
Hosted Site
Contact


Overview
BakeMyDay is a comprehensive baking website that offers a variety of recipes. Our mission is to inspire and guide bakers of all levels to create delicious baked goods with ease and confidence.

Features
Carousel's on Home and About pages: Selection of baking images automatically rotating 
Recipe Collection: A vast collection of recipes categorized by type (cakes, cookies, bread, pastry).
Contact us Form: A form to contact us any questions or queries you have. 
Login / Signup forms: login or sign up so you can save your favourite recipes
About: An about us page, why we decided to create BakeMyDay
Favourites: A page where all your favourite recipes are stored
Sitemap: Adding a sitemap to see all pages on the website 
Search Bar: search for your favourite recipes 
Social Media Icons: Check us out on Social Media! 
Share Icon: Share our website with your friends and Family
Recipes Api: Connected to the Edamam api which fetches recipes and displays them.
Form Api: sends an email to you once you have submitted a contact form 
Custon loading spinner: Custom loading spinner on recipe pages

Directory Structure

BakeMyDay/
│
├── docs/
│   ├── lighthouse.html
│   └── api.txt
│
├── public/
│   ├── styles.css
│   └── images/
│       ├── BakeMyDay.png
│       ├── brownie.png
│       ├── choccake.png
│       ├── cookies.png
│       ├── donuts.png
│       ├── pastry.png
│       ├── PWBackgroundBig.png
│       └── favicon.ico
│
├── components/
│   ├── BackToTop.astro
│   ├── Header.astro
│   ├── Footer.astro
│   └── SocialMediaIcons.astro
│
├── layouts/
│   ├── Layouts.astro
│
├── pages/
|   ├── favourites.astro
│   ├── bread.astro
│   ├── cakes.astro
│   ├── cookies.astro
│   ├── recipes-details.astro
│   ├── recipes.astro
│   ├── pastries.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── index.astro
│   ├── login.astro
│   ├── response.astro
│   ├── search-results.astro
│   ├── signup.astro
│   ├── signupconfirmation.astro
│   ├── sitemap.astro
│   └── terms.astro
│
└── README.md


Installation
To set up the BakeMyDay website locally, follow these steps:

Clone the repository:
git clone https://github.com/reillev123/final-project-1.git
cd final-project-1
Install dependencies:
npm install
Start the development server:
npm run dev
The website should now be running at  http://localhost:4321/final-project-1
Note: you will need to cd down into final-project-1 again to run npm run dev. So the project will open on final-project-1 and then cd into final-project-1. 

Hosted Site 
Our website is hosted at https://reillev123.github.io/final-project-1/

Contact
If you have any questions, feedback, or issues, please contact us at [EveReilly@bakemyday.com].

Thank you for using BakeMyDay! We hope our website helps you create delicious baked goods and enjoy the art of baking. Happy baking!
