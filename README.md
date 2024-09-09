# Book Dock

**Book Dock** is a full-stack MERN application designed to manage books. Users can post, update, delete, and view books, as well as search for them by title or author.

## Technologies Used

- **Frontend:** React JS, Tailwind CSS
- **Backend:** Node JS, Express JS
- **Database:** MongoDB
- **Development Tool:** Vite

## Features

- **Add**: Post new books with details including title, author, and published year.
- **Update**: Edit existing book details.
- **Delete**: Remove books from the database.
- **View**: Browse and view book details.
- **Search**: Find books by title or author.

## Getting Started

### Prerequisites

- Node.js and npm installed
- VS Code or any other code editor
- Git (optional, for cloning the repository)

### Setup Instructions

1. **Clone the Repository**

    ```bash
    git clone https://github.com/ahadalireach/bookdock.git
    ```

    `Unzip the File`

2. **Open with VS Code**

   Open the project directory with VS Code or your preferred code editor.

3. **Install Dependencies**

   **Frontend:**
   
    - Navigate to the frontend directory:

      ```bash
      cd frontend
      ```

    - Install the dependencies:

      ```bash
      npm install
      ```

    - Run the development server:

      ```bash
      npm run dev
      ```

   **Backend:**
   
    - Navigate to the backend directory:

      ```bash
      cd backend
      ```

    - Create a `.env` file in the backend directory and add the following environment variables:

      ```env
      PORT=5000
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret_key
      ```

    - Install the dependencies:

      ```bash
      npm install
      ```

    - Start the server:

      ```bash
      npm run dev
      ```

4. **Update API URLs**

   Ensure that the API URLs in the frontend code are correctly set to point to your local backend server.

5. **Access the Application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

**Live Demo**

- Live Web: [bookdock-web.vercel.app](https://bookdock-web.vercel.app)
- GitHub Repo: Give it a Star!
- Live Video Demo: Coming Soon

**Contact**

For any questions or feedback, please reach out to me at [ahadali.reach@gmail.com](mailto:ahadali.reach@gmail.com).
