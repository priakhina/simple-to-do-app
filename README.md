# Simple To-do App

A simple full-stack to-do application that allows users to view, create, update, delete, and filter their to-do items.

Built with:

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Local Development](#local-development)
- [Build and Production](#build-and-production)
- [Backend API Usage](#backend-api-usage)

## Project Overview

### Features

The app allows users to:

- Add new to-dos to the list
- Mark to-dos as completed
- Delete to-dos from the list
- Filter by all/active/completed to-dos
- Clear all completed to-dos
- Toggle light and dark mode
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page

### Live URL

The app is deployed on Render: [https://simple-to-do-app-3eti.onrender.com](https://simple-to-do-app-3eti.onrender.com)

### Screenshots

<table>
  <thead>
    <tr>
      <th></th>
      <th>Desktop view</th>
      <th>Mobile view</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th width="5%">Light mode</th>
      <td width="65%"><img src="https://github.com/user-attachments/assets/eaeeb68e-0de1-469c-b85c-43de512e1287" width="100%" height="auto"></td>
      <td width="30%"><img src="https://github.com/user-attachments/assets/b7e9586e-1170-4496-bf71-723d6ac3d1e0" width="100%" height="auto"></td>
    </tr>
    <tr>
      <th width="5%">Dark mode</th>
      <td width="65%"><img src="https://github.com/user-attachments/assets/6b1bc345-f3b6-4b3d-9fee-b9bc576f545b" width="100%" height="auto"></td>
      <td width="35%"><img src="https://github.com/user-attachments/assets/315d9759-b4b0-45a5-8b52-d130dc576362" width="100%" height="auto"></td>
    </tr>
  </tbody>
</table>

## Project Structure

```
.
├── client/            # React frontend (Vite + Tailwind CSS)
├── server/            # Express backend
├── package.json       # Root scripts for running and building the app
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation

### 1. Clone the repository

```
git clone https://github.com/priakhina/simple-to-do-app.git
cd simple-to-do-app
```

### 2. Install dependencies

Make sure you have [Node.js](https://nodejs.org/en) installed.

```
npm run install-all
```

This runs:

- `npm install` for root
- `npm install` inside `/client`
- `npm install` inside `/server`

## Local Development

Run **frontend & backend** together from the root folder:

```
npm run dev
```

This uses **concurrently** to start both servers:

- `npm run dev --prefix client` → starts Vite dev server
- `npm run dev --prefix server` → starts Express server

Frontend is available at:

```
http://localhost:5173
```

Backend API is available at:

```
http://localhost:3001/api/todos
```

## Build and Production

### 1. Build the frontend from root:

```
npm run build
```

### 2. Start production server from root:

```
npm start
```

In production, ***the Express app serves the built React app*** from `/client/dist`. The app is accessible on your server URL, e.g.:

```
http://localhost:3001
```

All API endpoints remain under `/api/todos`.

## Backend API Usage

The backend provides a simple REST API for managing todos.

### Base URL

```
http://localhost:3001/api/todos
```

### API Endpoints

| Method  | Endpoint | Description |
| ------------- | ------------- | ------------- |
| GET  | `/api/todos` | Get all to-dos |
| POST | `/api/todos` | Create a new to-do (required fields: `text` of type `string`) |
| PUT | `/api/todos/:id` | Update an existing to-do (required fields: `text` of type `string`, `completed` of type `boolean`) |
| DELETE | `/api/todos/:id` | Delete an existing to-do |
| DELETE | `/api/todos/completed` | Delete all completed to-dos |

> [!NOTE]  
> Requests with invalid IDs return `404 Not Found`.
>
> Validation errors (missing or wrong type fields) return `404 Bad Request`.

### 1. Get all to-dos

#### Endpoint:

```
GET /api/todos
```

#### Response (200 OK):

A list of all to-do items

```
[
  {
    "id": 1755273819484,
    "text": "Wash the dishes",
    "completed": true
  },
  {
    "id": 1755273830080,
    "text": "Do homework",
    "completed": false
  }
]
```

### 2. Create a new to-do

#### Endpoint:

```
POST /api/todos
```

#### Body:

Required fields: `text` of type `string`

```
{
  "text": "Cook dinner"
}
```

#### Response (201 Created):

A newly-created to-do item

```
{
  "id": 1755274527149,
  "text": "Cook dinner",
  "completed": false
}
```

### 3. Update an existing to-do

#### Endpoint:

```
PUT /api/todos/:id
```

#### Body:

Required fields:
- `text` of type `string`
- `completed` of type `boolean`

```
{
  "text": "Cook dinner",
  "completed": true
}
```

#### Response (200 OK):

An updated to-do item

```
{
  "id": 1755274527149,
  "text": "Cook dinner",
  "completed": true
}
```

### 4. Delete an existing to-do

#### Endpoint:

```
DELETE /api/todos/:id
```

#### Response (204 No Content):

No Content

### 5. Delete all completed to-dos

#### Endpoint:

```
DELETE /api/todos/completed
```

#### Response (200 OK):

An updated list of to-dos that contains only items marked as active (i.e., `completed` set to `false`)

```
[
  {
    "id": 1755273830080,
    "text": "Do homework",
    "completed": false
  }
]
```
