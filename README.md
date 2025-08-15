# Simple To-do App

A simple full-stack app that allows users to manage their to-dos.

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

The app allows users to:

- Add new to-dos to the list
- Mark to-dos as complete/incomplete
- Delete to-dos from the list
- Filter by all/active/complete to-dos
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

Run frontend & backend together from root:

```
npm run dev
```

This uses **concurrently**:

- `npm run dev --prefix client` → starts Vite dev server
- `npm run dev --prefix server` → starts Express server

Frontend is available at:

```
http://localhost:5173/
```

Backend is available at:

```
http://localhost:3001
```

## Build and Production

Build the frontend from root:

```
npm run build
```

Start production server from root:

```
npm start
```

In production, Express serves the built React app from `/client/dist`.

## Backend API Usage

The backend provides a simple REST API for managing todos.

### Base URL

```
http://localhost:3001/api/todos
```

### 1. Get all to-dos

#### Endpoint:

```
GET /api/todos
```

#### Response (200 OK):

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

```
{
  "text": "Cook dinner"
}
```

#### Response (201 Created):

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

```
{
  "text": "Cook dinner",
  "completed": true
}
```

#### Response (200 OK):

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

### 5. Delete all completed todos

#### Endpoint:

```
DELETE /api/todos/completed
```

#### Response (200 OK):

```
[
  {
    "id": 1755273830080,
    "text": "Do homework",
    "completed": false
  }
]
```
