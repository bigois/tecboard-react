# Tecboard

A React front-end application for visually organizing events by technology area. The project includes tracks such as front-end, back-end, DevOps, AI, data science, and cloud, while also allowing users to create new events through a form.

## Overview

Tecboard was structured as a study project focused on React fundamentals and interface organization. The application renders event lists by category, uses reusable components, and handles form submission with `FormData` to create new event cards.

## Features

- Display of events grouped by topic.
- Creation of new events with title, description, cover image, date, and category.
- Component-based interface with Navbar, Banner, Form, Sections, and Cards.
- Initial data centralized in a local service.
- Styling separated by component.

## Stack

- React 19
- Vite 8
- Modern JavaScript with ES modules
- ESLint with rules for React Hooks, React Refresh, and imports

## Practiced Concepts

- Componentization
- Props and `children`
- Prop spreading
- `useState`
- Form handling with `FormData`
- List rendering
- Project organization in simple layers

## Project Structure

```text
tecboard/
|-- public/
|   |-- banner.png
|   |-- favicon.svg
|   |-- logo.png
|-- src/
|   |-- components/
|   |   |-- App/
|   |   |-- Banner/
|   |   |-- Card/
|   |   |-- Form/
|   |   |-- Navbar/
|   |   |-- Subjects/
|   |-- services/
|   |   |-- subjectsService.js
|   |-- index.css
|   |-- main.jsx
|   |-- reset.css
|-- docs/
|   |-- COMPARE_I.md
|   |-- COMPARE_II.md
|   |-- FORMDATA_EXPLICADO.md
|-- eslint.config.js
|-- index.html
|-- package.json
|-- vite.config.js
```

## How to Run

### Requirements

- Node.js 18 or higher
- npm

### Installation

```bash
npm install
```

### Development Environment

```bash
npm run dev
```

Then open the address shown by Vite in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Builds the production version into `dist/`.

```bash
npm run preview
```

Runs a local preview of the production build.

```bash
npm run lint
```

Checks the codebase with ESLint.

## Application Flow

1. The initial event data is defined in `src/services/subjectsService.js`.
2. The main component assembles the page with navigation, banner, form, and sections.
3. The form captures submitted values and transforms the data into an object with `FormData`.
4. Each category renders its events as cards.

## Supporting Documentation

The project also includes supporting materials in the `docs/` folder with explanations about:

- comparisons between this project and other approaches in the workspace;
- the use of `FormData` and `Object.fromEntries()`;
- structure and configuration decisions.

## License

This project is available for study purposes.
