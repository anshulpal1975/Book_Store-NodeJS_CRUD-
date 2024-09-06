# Bookstore API

This API allows users to manage a collection of books. It supports CRUD operations, user authentication, searching, filtering, and pagination.

## API Endpoints

### Books

- **Get all books:**
  - **GET**: `http://localhost:5000/api/books`

- **Create a new book:**
  - **POST**: `http://localhost:5000/api/books`
  - **Request Body**:
    ```json
    {
      "title": "Book added",
      "author": "Author added",
      "genre": "Fiction added"
    }
    ```

- **Update a book:**
  - **PUT**: `http://localhost:5000/api/books/<book_id>`
  - **Request Body**:
    ```json
    {
      "title": "Updated Book Title",
      "author": "New Author"
    }
    ```

- **Delete a book:**
  - **DELETE**: `http://localhost:5000/api/books/<book_id>`

- **Search by title:**
  - **GET**: `http://localhost:5000/api/books?title=Book One`

- **Filter by author:**
  - **GET**: `http://localhost:5000/api/books?author=Author three`

- **Paginate results:**
  - **GET**: `http://localhost:5000/api/books?page=1&limit=3`

### Users

- **Register a new user:**
  - **POST**: `http://localhost:5000/api/users/register`
  - **Request Body**:
    ```json
    {
      "username": "testuser New",
      "password": "testpassword New"
    }
    ```

- **User login:**
  - **POST**: `http://localhost:5000/api/users/login`
  - **Request Body**:
    ```json
    {
      "username": "testuser New",
      "password": "testpassword New"
    }
    ```

  This will return a JWT token.

## Running the Project

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory with the following content:
    ```bash
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```
4. Run `npm start` to start the server.
5. Test the API using Postman or any other API client.

## Note

- Replace `<book_id>` with the actual ID of the book in the update and delete routes.
- Ensure MongoDB is running and you have a valid connection string in `.env`.
