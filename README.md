# Greeting App  

A simple web application that allows users to enter their name and receive a personalized greeting. The app consists of a React frontend and an Express.js backend.  

## Features  

- Users can input their name and receive a greeting message.  
- API integration using Axios to fetch the greeting from the backend.  
- Navigation between the input page and the greeting page using React Router.  
- Responsive and centered UI.  

## Technologies Used  

- **Frontend:** React, Vite, Axios, React Router  
- **Backend:** Node.js, Express  
- **Deployment:** Netlify (frontend) & Render

## Installation and Setup  

### Clone the Repository  

Clone the project from GitHub and navigate into the directory.  

git clone https://github.com/siddharthgumber07/youngslab  
cd greeting-app  

### Backend Setup  

Navigate to the backend folder and install dependencies.  

cd backend  
npm install  

Create a `.env` file inside the backend folder and add the following environment variable:  

PORT=5000  

Start the backend server.  

npm start  

The backend will now be running at `http://localhost:5000`.  

### Frontend Setup  

Navigate to the frontend folder and install dependencies.  

cd ../frontend  
npm install  

Now, go to \src\components\GreetingForm.jsx and change https://youngslab.onrender.com to http://localhost:5000 at line no 16.

Start the frontend application.  

npm run dev  

The frontend will now be running at `http://localhost:5173`.  

## API Endpoint  

The backend provides a simple API to return a greeting message.  

- Endpoint: **GET /api/greet?name=YourName**  
- If a name is provided, the API responds with:  

  {  
    "message": "Hello, YourName! Welcome to Younglabs."  
  }  

- If no name is provided, the API responds with:  

  {  
    "error": "Name is required."  
  }  

## Deployment Guide  

### Backend Deployment  

The backend is deployed using following service:  
- Render    

### Frontend Deployment  

The frontend is deployed using following service:  
- Netlify  

