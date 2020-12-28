# Portfolio using React & Sanity.io & Tailwind CSS

## Sanity

### Install

- sudo npm i -g @sanity/cli
- sanity login
- sanity init
- project name : studio
- template : in this project we use Blog (schema)
- sanity start and then connect to the project
- create client.js in src and then install client package
- npm i @sanity/client
- setup client.js (add projectId)
- go to sanity.io/ our project/settings/API
- add new Origin (Url localhost)

## Tailwind CSS framwork

### Install

add into index.css:
`@import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");`

before that we add prose class:
`@import url("https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css");`

### className used:

- bg-red-600 : background red & darkness lvl600

- container mx-auto: margin auto (to center the container)

- inflex-flex: inline flex > the flex will be inline

- py px: padding of Y and X

- mr : margin right

- text-red-100 > text red of 100

- **in tailwind** we can do hover Effect: hover:text-green-800 text-4xl font-bold cursive tracking-widest

- tracking-widest the space between letters

- **activeClassName** when we are in this page / or button clicked

- **responsiveness** grid md:grid-cols-2 lg:grid-cols-3 : one column on smaller screen 2 on medium 3 on large screen

## React Social Icons

used to add social network icons.

- to install: npm i react-social-icons
  https://jaketrent.github.io/react-social-icons/

- then import : `import { SocialIcon} from 'react-social-icons'`

https://jaketrent.github.io/react-social-icons/

## React Router

is used to navigate between components

### Install

install package : npm i react-router-dom

and then import BrowserRouter Switch & Route in our app.js and wrap out component with it

## Query Language (GROQ) (we can use GraphQL also)

GROQ (Graph-Relational Object Queries) is a declarative language designed to query collections of largely schema-less JSON documents. Its primary design goals are expressive filtering, joining of several documents into a single response, and shaping the response to fit the client application.

- `*` all data
