# CS Student Portfolio

A simple, responsive React portfolio built with Vite. It uses reusable components, props, `useState`, `useRef`, and `useEffect`.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL Vite prints.
5. Run `npm run build` to check the production build.

## Personalize it

- Replace `Your Name` throughout the project with your name.
- Replace `public/images/profile-placeholder.svg` with your own portrait (keep the filename, or update `src/sections/Hero.jsx`).
- Edit `src/data/projects.js` to change project descriptions and technologies.
- Update `src/sections/Skills.jsx` with your strongest skills.
- Replace the sample entries in `src/sections/Experience.jsx` and `src/sections/Education.jsx` with accurate details. Remove any entries that do not apply.
- Update the email and profile links in `src/sections/Contact.jsx`.
- Add repository/demo links to the project modal when you have them.

## React concepts demonstrated

- Components: Navbar, Hero, Projects, ProjectCard, ProjectModal, Skills, TimelineItem, and more.
- Props: reusable cards, section titles, and timeline entries receive data through props.
- `useState`: mobile navigation and selected-project modal state.
- `useRef`: horizontal project carousel scrolling.
- `useEffect`: Escape-key handling and scroll locking for the project modal.
- Rendering lists with `.map()` and stable `key` values.
