# Web Starter Kit TS

It's a simple HTML starter kit with Typescript support.

Live link: https://monumental-maamoul-fd47e4.netlify.app/ 

## Features

- TS only.
- HTML template.
- Vendor chunks
- CSS, SCSS support
- Vendor Chunking
- ESLint TS
- Reset CSS
- .png, .jpg, .svg support
- Code splitting
- Lazy Loading

## Installation Guide

- Install `degit` globally using `npm install -g degit`.
- Bootstrap project using `degit launchpad5682/web-starter-kit-TS`.
- Use `npm install` to install all the packages.

## Development Mode

- Run using `npm start` which will create a live server with hot-reload.
- Update TS files in the `src` directory, add images to `assets`, add styles in `styles` directory.
- Example for Image import and lazy loading is added in the `index.ts` file.

## Production mode

- Run `npm run build`, this'll combine and create a `dist` with the resulted code for deployment.
