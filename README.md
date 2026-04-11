# Users Management App

## 📌 Overview

This is a simple **Node.js + Express + MongoDB** web application for managing users.
It allows you to:

* View all users
* Sort users by age
* View a single user
* Update user information
* Delete a user

The project follows an MVC-like structure with services for database logic and EJS for rendering views.

---

## 🚀 Features

* Server-side rendering with **EJS**
* REST API for user operations
* MongoDB integration
* Sorting users (ascending/descending by age)
* Update & delete functionality via frontend
* Clean and minimal UI

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Frontend:** EJS, Vanilla JavaScript, CSS
* **Other:** dotenv, morgan, cookie-parser

---

## 📁 Project Structure

```
project/
│
├── controllers/
│   └── UsersController.js
│
├── routes/
│   ├── index.js
│   └── users.js
│
├── services/
│   ├── DatabaseService.js
│   └── UsersService.js
│
├── views/
│   ├── components/
│   ├── index.ejs
│   ├── view.ejs
│   └── error.ejs
│
├── public/
│   ├── js/script.js
│   └── stylesheets/style.css
│
├── helpers/
│   └── sendResponse.js
│
├── app.js
├── .env
└── package.json
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Avo444/users-crud-mongodb.git
cd users-crud-mongodb
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add:

```env
MONGODB_URL=your_mongodb_connection_string
```

4. Run the app:

```bash
npm start
```

---

## 🌐 API Endpoints

### Get all users

```
GET /api/users
```

### Get users with sorting

```
GET /api/users?sort=asc
GET /api/users?sort=desc
```

### Get single user (via view page)

```
GET /view/:id
```

### Update user

```
PATCH /api/users/:id
```

### Delete user

```
DELETE /api/users/:id
```

---

## 🧠 How It Works

* **UsersController** handles HTTP requests and responses.
* **UsersService** communicates with MongoDB.
* **DatabaseService** manages database connection.
* **Frontend JS** handles:

  * Sorting
  * Deleting users
  * Updating user data via fetch API

---

## 🎨 Frontend Behavior

* Clicking **Sort** toggles between ascending and descending order.
* Clicking **View** opens a detailed user page.
* Inside the user page:

  * You can update user data
  * Or delete the user

---

## ⚠️ Notes

* MongoDB must be running or accessible via the connection string.
* Ensure `.env` is properly configured.
* IDs must be valid MongoDB ObjectIds.

---

## 📌 Future Improvements

* Add validation
* Add user creation form
* Improve error handling
* Add pagination
* Authentication & authorization

---

## 👨‍💻 Author

Avo

---

## 📄 License

This project is licensed under the MIT License.
