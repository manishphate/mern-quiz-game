https://quiz-619.netlify.app


Project Structure:

The project has two main directories: backend and frontend, each representing the backend and frontend parts of the application respectively.
The .env files contain environment variables used to configure the application. These variables are often sensitive and should not be committed to version control systems like Git.
Backend Configuration:

In the backend/.env file, there are environment variables defined:                                                                                                                         
PORT: The port on which the backend server will run (8081 in this case).                                                                                                                   
MONGODB_URI: The connection URI for MongoDB database.                                                                                                                       
ACCESS_TOKEN_SECRET: Secret key for JWT access token generation.                                                                                                                    
REFRESH_TOKEN_SECRET: Secret key for JWT refresh token generation.																																	                                                    
REFRESH_TOKEN_EXPIRY: Expiry duration for refresh tokens.                                                                                                                                  
ACCESS_TOKEN_EXPIRY: Expiry duration for access tokens.                                                                                                                                  
CORS_ORIGIN: Allowed origin for CORS (Cross-Origin Resource Sharing).                                                                                                                   
ADMIN_EMAIL: Admin email address.                                                                                                                                                         
APP_PASS: Password for an application (e.g., Google app pass).                                                                                                                   
FRONTEND_APP_DOMAIN: Domain of the frontend application.                                                                                                                                
Frontend Configuration:                                                                                                                                                                

In the frontend/.env.production file, there's an environment variable:                                                                                                                  
REACT_APP_BACKEND_URI: URI for the backend API.                                                                                                                                         
Setup Steps:                                                                                                                                                                           

Clone the repository from GitHub.                                                                                                                                                     
Navigate to the backend directory in the terminal and run npm install to install backend dependencies.                                                                                 
Set up a MongoDB database and provide the connection URI in the MONGODB_URI field of the backend/.env file.                                                                                      
Set other necessary environment variables in the backend/.env file.                                                                                                               
Navigate to the frontend directory in the terminal and run npm install to install frontend dependencies.                                                                                  
Set the REACT_APP_BACKEND_URI variable in the frontend/.env.production file to point to your backend API.                                                                               
Ensure the CORS_ORIGIN matches your frontend application's domain.   e.g.(http://localhost:3000)                                                                                                                  
Run npm start in both the backend and frontend directories to start the backend and frontend servers.                                                                                   


