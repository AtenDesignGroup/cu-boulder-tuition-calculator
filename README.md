# CU Boulder: Tuition Calculator

## Getting Started

Switch to the project's version of node
```bash
npm run dev
```
Install the node packages
```bash
npm install
```

Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.


The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages

## Deploy (NextJS) React App

1st re-build
```bash
netlify build
```

Deploy preview

```bash
netlify deploy -o
```

Deploy to production

```bash
netlify deploy --prod -o
```

## Deploy Sanity Studio (CMS) App

Within the `/studio` directory run the following command

```bash
sanity deploy
```

## URLs

Local Nextjs Dev site
http://localhost:3000/

Local Sanity Studio (cms)
http://localhost:3333/

Live Sanity Studios (cms)
https://cu-boulder.sanity.studio/

Netlify site
https://cu-boulder-tuition-calculator.netlify.app/