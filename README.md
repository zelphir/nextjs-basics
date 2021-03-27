# Next.js Basics

## Day 1

Node.js, Next.js, config & setup

## Day 2

### Routing

- File-system base: -> `/pages` || `/src/pages`
- Supporta server side e client side routing

#### Index routes

- `pages/index.js` -> `/`
- `pages/blog/index.js` -> `/blog`

#### Nested routes

- `pages/blog/first-post.js` -> `/blog/first-post`
- `pages/dashboard/settings/username.js` -> `/dashboard/settings/username`

#### Dynamic routes

- `pages/blog/[post].js` -> `/blog/:post` (`/blog/hello-world`)
- `pages/[user]/settings.js` -> `/:user/settings` (`/s9fhd-diikhd78-dkjhd/settings`)
- `pages/news/[...details].js` -> `/news/*` (`/news/2021/id/hello-world`)
