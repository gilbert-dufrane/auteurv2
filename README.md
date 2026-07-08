# Gilbert Dufrane - La Passion d'Ecrire

[Project description]

## Live Demo

[Link if deployed]

## Tech Stack

- Frontend:
- Backend:
- Database:

## Project Setup (**Astro Starter Kit** in second part of README)

- Create the repo on github
- Clone the repo on VS Code `git clone https://github.com...git`
- At the root of the project install astro `npm create astro@latest .` (**use PowerShell not Git Bash**)
- Answer questions in the terminal:
  - `Where should we create your new project?` -> `.` to create at the root of the project
  - `How would you like to start your new project?` -> Use minimal (empty) template
  - `Install dependencies?` -> Yes
  - `Initialize a new git repository?` -> No (we have an exiting repo)
  - **NOTE** if there's a blocker when picking the path to create the project -> simply hit Enter with whatever folder is suggested (e.g. "squealing-star"), then move all the content created to the root at the end of this process `Move-Item -Path .\squealing-star\* -Destination . -Force` then delete empty folder `dir .\squealing-star`

---

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
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
