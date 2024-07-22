# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).



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
bash
Copy code
git clone https://github.com/reillev123/final-project-1.git
cd BakeMyDay
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
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

