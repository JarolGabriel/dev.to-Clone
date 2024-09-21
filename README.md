# React Dev.to Clone

## Objective

This project aims to apply knowledge of JavaScript, ReactJS, CSS, and web
technologies to create a functional clone of the [dev.to](http://dev.to)
website, showcasing real-world problem-solving skills.

## Features

The application includes the following pages:

### User Registration

- Allows new users to register using the user registration endpoint of the API
  developed in the backend module.
- Mimics the same interaction as the original page.

**Live Example:** [dev.to Registration](https://dev.to/enter?state=new-user)

### User Login

- Enables previously registered users to log in using the backend API.
- Matches the interaction of the original page.

**Live Example:** [dev.to Login](https://dev.to/enter)

### Post List

- Displays all posts from the database, replicating the main page of
  [dev.to](http://dev.to).
- Utilizes the API developed in the backend module.

**Live Example:** [dev.to Home](https://dev.to/)

### Post Detail

- Shows the selected post along with its body, using the backend API.
- Maintains interaction similar to the original page.

**Live Example:**
[dev.to Post Example](https://dev.to/kshyun28/how-to-make-your-awesome-github-profile-hog)

### Create Posts

- Features a post creation form connected to the backend API.
- Facilitates user-generated content.

**Live Example:** (Include link once deployed)

## API Connection

This project is connected to the backend API as a requirement.

**API Endpoint:**
[Node Express Posts Users API](https://node-express-posts-users-api.onrender.com)

## Technologies Used

- **Frontend:**

  - Next.js (or Vite, preference for Next.js)
  - React
  - Tailwind CSS
  - clsx (for conditional class names)

- **React Hooks:**

  - useEffect
  - useState
  - react-hook-form

- **Data Management:**
  - fetch API
  - localStorage

## Extra Points ✨

- Implemented responsive design with Tailwind CSS.
- Deployed the project on Vercel.
- Deployed the backend on [Render](https://render.com).

## How to Run the Project Locally

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
