# Authentication System using Djoser Library (Django Backend and React Frontend)

## Description

The Authentication System is a web application built using Django in the backend and React in the frontend, employing the Djoser library for user authentication. This system provides a robust and secure user authentication process, allowing users to register, login, and manage their accounts with ease. It utilizes token-based authentication (JWT) for seamless and stateless user sessions.

## Features

- User Registration: New users can register on the platform by providing their email and a secure password. Account activation is required via an activation link sent to the user's email.

- User Login: Registered users can log in to the system using their email and password. The login process is protected with CSRF tokens and rate limiting to prevent brute force attacks.

- Password Reset: Users can reset their passwords if they forget them. A password reset link is sent to the user's registered email address.

- User Profile: Each user has a profile containing their username, email, profile picture, and other customizable details.

- Token-based Authentication: The system uses JSON Web Tokens (JWT) for token-based authentication, ensuring secure and stateless sessions for users.

- Access Control: User roles (e.g., user, admin, moderator) are implemented to control access to certain functionalities and views.

- OAuth Integration: The system integrates with GitHub's OAuth service, allowing users to log in using their GitHub credentials securely.

- Cross-Origin Resource Sharing (CORS): CORS support is enabled to facilitate secure communication between the frontend and backend on different domains.

- User Logout: Users can log out from their accounts, terminating their current session.

## Installation

### Backend (Django)

1. Create a virtual environment and activate it:

   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

2. Install the required dependencies:

   ```
   pip install -r requirements.txt
   ```

3. Perform database migrations:

   ```
   python manage.py migrate
   ```

4. Create a superuser (for admin access):

   ```
   python manage.py createsuperuser
   ```

5. Run the Django development server:

   ```
   python manage.py runserver
   ```

### Frontend (React)

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install the required dependencies:

   ```
   npm install
   ```

3. Run the React development server:

   ```
   npm start
   ```

## Configuration

- Update the frontend API URL: In the React frontend (frontend/src/api/api.js), replace `http://localhost:8000/api/` with the URL of your Django backend API.

## Acknowledgements

This Authentication System is built using the following libraries and technologies:

- Django - https://www.djangoproject.com/
- Djoser - https://djoser.readthedocs.io/
- React - https://reactjs.org/
- Create React App - https://create-react-app.dev/

## Contact

For any inquiries or feedback, please contact at shreyaspachpute2002@gmail.com.
