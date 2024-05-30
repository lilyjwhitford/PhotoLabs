# Photolabs
PhotoLabs is an engaging React-based single-page application (SPA) designed to offer users an immersive photo-viewing experience. By leveraging a pre-existing API, we can craft an interactive frontend where users can explore and interact with a variety of photos. 

Key features of PhotoLabs include:

- Photo Categorization: Users can effortlessly sort photos by different topics, making it easy to find images that match their interests.
- Favorites: With the ability to like photos, users can curate their own collection of favorite images from anywhere within the application.
- Detailed View: Clicking on a photo reveals a larger version, complete with details and similar photos to enhance the browsing experience.

This project gave me the opportunity to elevate my React skills by using components, state management, and custom hooks in order to integrate the concepts I've practiced in previous projects into a more complex and dynamic application.

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Server

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Screenshots
![home_img](/frontend/docs/home.png)
![topic_fave_img](/frontend/docs/topic-fave.png)
![larger-photo-img](/frontend/docs/larger-photo.png)
![similar-photo-img](/frontend/docs/similar-photo.png)

## Dependencies
- react
- react-dom
- react-scripts
- web-vitals
- body-parser
- cors
- dotenv
- express
- helmet
- pg
- socket.io
- ws

## Dev Dependencies
- sass
- jest
- supertest

Original template credits: [photolabs-starter](https://github.com/lighthouse-labs/photolabs-starter) by [brainoflaraine](https://github.com/brainoflaraine) on GitHub