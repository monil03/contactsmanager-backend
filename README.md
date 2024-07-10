# Contact Manager Backend Application

Welcome to the Contact Manager Backend Application repository! This project is designed as a comprehensive crash course for beginners to learn and implement key concepts of Node.js, Express, MongoDB, and JWT. By following this project, you will build a fully functional backend for a contact manager application, gaining practical experience with modern web development technologies.

## Overview

### Project Structure

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine, enabling server-side scripting.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MongoDB**: A NoSQL database program that uses JSON-like documents with optional schemas, ideal for handling large volumes of data.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties. Used for authentication and secure data exchange.

### Key Features

- **User Authentication**: Secure user registration and login using JWT for authentication.
- **CRUD Operations**: Full Create, Read, Update, and Delete functionality for managing contacts.
- **Middleware**: Implementation of middleware for request validation, error handling, and authentication.
- **RESTful API**: A well-structured RESTful API following best practices for resource management.
- **Data Validation**: Robust data validation using Mongoose schemas.


### Implementation Steps

1. **Project Setup**
   - Initialize a Node.js project with `npm`.
   - Set up Express as the web framework.
   - Configure environment variables.

2. **Database Configuration**
   - Set up MongoDB Atlas or a local MongoDB instance.
   - Connect to MongoDB using Mongoose.

3. **User Authentication**
   - Implement user registration and login endpoints.
   - Secure routes with JWT authentication.

4. **Contact Management**
   - Create endpoints for adding, retrieving, updating, and deleting contacts.
   - Implement data validation for contact information.

5. **Middleware Integration**
   - Add middleware for request logging, error handling, and authentication.
   - Validate incoming requests using middleware.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account or local MongoDB installation.
- Basic understanding of JavaScript and web development concepts.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/contact-manager-backend.git
   cd contact-manager-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     PORT = 5002
     CONNECTION_STRING = <your_mongodb_uri>
     ACCESS_TOKEN_SECRET = <your_jwt>
     ```

4. Start the server:
   ```bash
   npm run dev
   ```

### Usage

- Use a tool like Thunder Client/Postman to interact with the API.
- Register a new user and log in to receive a JWT.
- Use the JWT to authenticate and manage contacts.

## API Endpoints

### User Authentication

- **POST /api/users/register**: Register a new user
- **POST /api/users/login**: Log in an existing user
- **GET /api/users/current**: Current user info

### Contact Management

- **GET /api/contacts**: Get all contacts (requires authentication)
- **POST /api/contacts**: Add a new contact (requires authentication)
- **GET /api/contacts/:id**: Get a contact by ID (requires authentication)
- **PUT /api/contacts/:id**: Update a contact by ID (requires authentication)
- **DELETE /api/contacts/:id**: Delete a contact by ID (requires authentication)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)

---

Feel free to customize this further according to your needs and implementation details!
