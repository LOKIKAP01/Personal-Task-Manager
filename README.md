# 📝 Personal Task Manager

A full-stack task management application built using React.js, Node.js, Express.js, and JSON-based data persistence.

This application helps users organize, track, and manage their daily tasks efficiently through a clean and user-friendly interface. Users can create tasks, edit them, track completion status, search and filter tasks, manage due dates, and identify overdue tasks.

---

# 🚀 Project Overview

The Personal Task Manager is designed to provide a simple yet effective way to manage personal tasks.

The application follows a full-stack architecture where:

- React.js is used for the frontend user interface.
- Node.js and Express.js are used to build the backend REST API.
- JSON file storage is used for data persistence.
- Axios is used for communication between the frontend and backend.

The goal of this project is to demonstrate practical knowledge of:

- Frontend Development
- Backend Development
- REST APIs
- CRUD Operations
- State Management
- Data Persistence
- User Interface Design

---

# ✨ Features

## Task Management

Users can:

- Create new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Undo completed tasks

---

## Task Details

Each task contains:

- Task Title
- Task Description
- Due Date
- Completion Status

---

## Search Functionality

Users can quickly search tasks using the task title.

Example:

Search:
```

react

```

Result:
```

Learn React Hooks

```

---

## Task Filtering

The application supports:

- All Tasks
- Completed Tasks
- Pending Tasks

This helps users focus on specific categories of tasks.

---

## Dashboard Statistics

The dashboard automatically displays:

- Total Tasks
- Completed Tasks
- Pending Tasks

The statistics update instantly whenever a task is added, edited, completed, or deleted.

---

## Due Date Management

Users can assign due dates to tasks.

The application validates date inputs and prevents invalid date formats during editing.

---

## Overdue Task Detection

Tasks whose due date has already passed are automatically highlighted.

Overdue tasks are visually distinguished using:

- Red indicator
- Warning message
- Special task styling

This helps users quickly identify tasks that require immediate attention.

---

## Data Persistence

The application stores task data in a JSON file.

Benefits:

- Data remains available after restarting the backend server.
- No external database is required.
- Lightweight and easy to maintain.

---

# 🛠 Technology Stack

## Frontend

- React.js
- JavaScript (ES6+)
- CSS3
- Axios

---

## Backend

- Node.js
- Express.js

---

## Data Storage

- JSON File Storage

---

# 📂 Project Structure

```text
Personal-Task-Manager
│
├── client
│   │
│   ├── src
│   │   │
│   │   ├── components
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   │
│   ├── data
│   │   └── tasks.json
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation Guide

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Backend Setup

Navigate to backend folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Start backend server:

```bash
node server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

## 3. Frontend Setup

Navigate to frontend folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 🔌 API Endpoints

## Get All Tasks

```http
GET /api/tasks
```

Returns all tasks.

---

## Create Task

```http
POST /api/tasks
```

Creates a new task.

---

## Update Task

```http
PUT /api/tasks/:id
```

Updates task information.

---

## Toggle Completion Status

```http
PATCH /api/tasks/:id
```

Marks a task as completed or incomplete.

---

## Delete Task

```http
DELETE /api/tasks/:id
```

Deletes a task.

---

# 🧠 Key Concepts Implemented

This project demonstrates practical implementation of:

### React Concepts

- Functional Components
- useState Hook
- useEffect Hook
- Component Reusability
- State Management

---

### Backend Concepts

- REST APIs
- Express Routing
- Request Handling
- Response Handling

---

### Full Stack Concepts

- Frontend-Backend Communication
- CRUD Operations
- JSON Data Persistence
- Form Validation
- Search and Filtering Logic

---

# 🎯 Challenges Faced

During development, several challenges were encountered:

### Data Persistence

Initially tasks were stored in memory and disappeared after restarting the server.

Solution:

- Implemented JSON file storage using Node.js File System Module (fs).

---

### Duplicate Task IDs

Task deletion caused ID conflicts.

Solution:

- Implemented unique ID generation logic.

---

### Due Date Validation

Users could enter invalid dates while editing tasks.

Solution:

- Added date format validation before saving changes.

---

### Overdue Detection

Tasks needed visual indication after their due date passed.

Solution:

- Added overdue task highlighting based on current date comparison.

---

# 🚀 Future Improvements

The following features can be added in future versions:

- User Authentication
- MongoDB Database Integration
- Drag and Drop Task Reordering
- Task Categories
- Priority Levels
- Email Notifications
- Dark Mode
- Cloud Storage
- Multi-user Support

---

# 📈 Learning Outcomes

This project helped in understanding:

- Full Stack Development Workflow
- React Application Structure
- REST API Design
- Backend Development with Express
- Data Persistence Techniques
- Frontend and Backend Integration
- User Experience Design Principles

---

# ⚠️ Current Limitations

- Uses JSON storage instead of a production database.
- Edit functionality currently uses browser prompts.
- No user authentication.
- No cloud synchronization.

These limitations were accepted to keep the project lightweight and focused on core functionality.

---

# 👨‍💻 Author

**Lokesh Kaprawan**

Personal Task Manager Project

Built using React.js, Node.js, Express.js, and JSON Persistence.

---

# 🙏 Thank You

Thank you for reviewing this project.

Feedback and suggestions are always welcome.