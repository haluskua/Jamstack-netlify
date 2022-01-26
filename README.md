# ** JAMstack FullstacK App with React, Serverless, and FaunaDB **

## This app is hosted on Netlify [Link](https://jamstack-list-of-links.netlify.app/)

### The purpose of this project is to understand and create a fullstack ReactJs app that can perform the full CRUD operation.

So as a JAMstack project, I intend to manage and understand how to have a fullstack application that takes netlify serverless functions with the FaunaDb to allow crud operations to communication between client-side and server-side. This project also shows that we can host a fullstack app using Netlify and Github Repository.

## How to Install

```
- npm install

```

## How to Run

```
- netlify dev

```

To run this app locally, you'll need to install the netlify-cli using npm install -g netlify-cli. The React app and the serverless functions will be served at http://localhost:8888.

You'll also need to add a .env file in the root directory and include FAUNA_SECRET_KEY=<your secret key>

## Npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Deployment

You can connect your repository to Netlify for Continuous Integration deployments. In the Netlify deploy configuration, tell Netlify to run npm run build as the command and then serve the build directory.

```
You'll also need to add FAUNA_SECRET_KEY environment variable inside of Netlify dashboard.

```
