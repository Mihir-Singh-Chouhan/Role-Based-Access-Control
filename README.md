**Role-Based Access Control System**
This project implements a Role-Based Access Control (RBAC) system using Express.js for the backend, JWT for tokenization, and MongoDB as the database.

**Features:
User Roles:**
Admin: Full access to admin, manager, and user dashboards.
Manager: Access to manager and user dashboards.
User: Limited to user dashboard only.

**Technologies Used:**
Express.js: Web framework for building the API.
JWT: For secure authentication and authorization.
MongoDB: NoSQL database for storing user data and roles.

**Middleware:**
Authentication middleware to validate JWT tokens and manage access based on user roles.
