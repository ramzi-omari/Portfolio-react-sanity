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

# Tailwind CSS framwork

### Install

add into index.css:
`@import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");`

before that we add prose class:
`@import url("https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css");`

# React Router

is used to navigate between components

### Install

install package : npm i react-router-dom

and then import the package in our app.js
