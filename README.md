# Frontend Stuff

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

[![Netlify Status](https://api.netlify.com/api/v1/badges/d3b6aa90-5dcd-4bcc-8e2f-eeba189f3584/deploy-status)](https://app.netlify.com/sites/fluffy-fox-512437/deploys)

## Setup for Lando dev

### Start Lando container
This creates the container if it doesn't already exist

```bash
lando start
```

### Install dependencies

This should happen automatically with how the .lando.yml file is configured. If you need to run the install manually, use this command:

```bash
lando yarn
```

### Rebuild container

Useful if any container configuration gets messed up

```bash
lando rebuild -y
```

### Restart container without rebuilding

```bash
lando restart -y
```

### Stop the container

```bash
lando stop
```

### Production

Build the application for production:

```bash
lando yarn build
```

Locally preview the production build:

```bash
lando yarn preview
```

## Setup for localhost dev

Install dependencies:

```bash
# yarn
yarn
```

### Development Server

Start the development server on http://localhost:3000 and automatically open it in your default browser

```bash
yarn dev -o
```

### Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
