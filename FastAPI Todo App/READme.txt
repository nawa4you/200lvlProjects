FastAPI To-Do List Web Application
A simple yet powerful To-Do list web application built with FastAPI, SQLModel, and a PostgreSQL database. This application allows users to create, read, update, and delete (CRUD) their to-do items through a web interface.

Features
Create, Read, Update, Delete (CRUD) To-Dos: Full management of your tasks.

Web Interface: User-friendly HTML interface for interacting with the to-do list.

FastAPI Backend: A high-performance, easy-to-use Python web framework.

SQLModel ORM: For clear, simple, and robust database interactions.

PostgreSQL Database: A powerful, open-source object-relational database system.

Dockerized Environment: Includes a docker-compose.yml for easy setup of the PostgreSQL database and pgAdmin.

Virtual Environment: Managed dependencies for a clean and isolated project setup.

Technology Stack
Backend: FastAPI

Database: PostgreSQL

ORM: SQLModel (built on Pydantic and SQLAlchemy)

Frontend: Jinja2 Templates for server-side rendering of HTML

Containerization: Docker, Docker Compose

Project Structure
.
├── main.py             # Main FastAPI application file
├── requirements.txt    # Python dependencies
├── docker-compose.yml  # Docker Compose configuration for services
├── .env                # Environment variables (DATABASE_URL)
├── static/             # Static files (CSS, JS)
└── templates/          # Jinja2 HTML templates
    ├── index.html
    ├── create_todo.html
    ├── edit_todo.html
    └── todo_detail.html

Setup and Installation
1. Prerequisites
Python 3.8+

Docker and Docker Compose

A virtual environment tool (venv)

2. Clone the Repository
git clone <your-repository-url>
cd <your-repository-name>

3. Set Up the Backend (Virtual Environment)
Create and activate a virtual environment:

python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

Install the required Python packages:

pip install -r requirements.txt

4. Set Up the Database (Docker)
Start the PostgreSQL database and pgAdmin services using Docker Compose:

docker-compose up -d

This will:

Pull the postgres and pgadmin4 images.

Create a container named postgres_db for the database.

Create a container named pgadmin for the database management tool.

Create a named volume postgres_data to persist your database data.

Create a .env file in the root of your project and add the database connection URL:

DATABASE_URL="postgresql://admin:adminpassword@localhost:5438/mydatabase"

5. Running the Application
Once the setup is complete, you can run the FastAPI application using uvicorn:

uvicorn main:app --reload

The application will be available at http://127.0.0.1:8000.

API Endpoints & UI Views
The application provides the following views:

GET /: Home page that displays all the to-do items.

GET /todos/create: A form to create a new to-do item.

POST /todos/create: The endpoint that handles the creation of a new to-do item.

GET /todos/{todo_id}: Displays the details of a specific to-do item.

GET /todos/{todo_id}/edit: A form to edit an existing to-do item.

POST /todos/{todo_id}/edit: The endpoint that handles updating a to-do item.

DELETE /todos/{todo_id}/delete: The endpoint to delete a to-do item.

Database Management (pgAdmin)
You can access the pgAdmin interface to manage your database at http://localhost:5050.

Email: admin@example.com

Password: adminpassword

When adding a new server in pgAdmin, use postgres_db as the hostname/address to connect to the PostgreSQL container.