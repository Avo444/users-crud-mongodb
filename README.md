
---

# Users Management App

## 📌 Overview

This is a full-featured **Node.js + Express + MongoDB** web application for managing users.

The app provides both **server-side rendering (EJS)** and a **REST API**, along with a dynamic frontend powered by Vanilla JavaScript.

---

## 🚀 Features

### ✅ Core Features

* View all users
* View single user details
* Update user information
* Delete users
* Sort users by age (ascending / descending)

### 🆕 New Features

* ➕ Add new user via **modal form**
* ✅ Request validation using **Joi middleware**
* 🔔 Real-time **notifications (success/error)**
* 🔄 Dynamic UI updates using **Fetch API**
* 🧩 Clean separation using middleware & services

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Frontend:** EJS, Vanilla JavaScript, CSS
* **Validation:** Joi
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
├── middleware/
│   └── addUserMiddleware.js
│
├── schemas/
│   └── addUserSchema.js
│
├── views/
│   ├── components/
│   │   ├── item.ejs
│   │   └── modal.ejs
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

3. Create a `.env` file:

```env
MONGODB_URL=your_mongodb_connection_string
```

4. Run the app:

```bash
npm run dev
```

---

## 🌐 API Endpoints

### 📄 Get all users

```
GET /api/users
```

### 🔃 Get users with sorting

```
GET /api/users?sort=asc
GET /api/users?sort=desc
```

### 👤 Get single user (view page)

```
GET /view/:id
```

### ➕ Add user

```
POST /api/users
```

### ✏️ Update user

```
PATCH /api/users/:id
```

### ❌ Delete user

```
DELETE /api/users/:id
```

---

## 🧠 How It Works

### Controllers

Handle incoming requests and return responses or render views.

### Services

Work with MongoDB and contain business logic.

### Middleware

* `addUserMiddleware` validates incoming data using Joi
* Prevents invalid data from reaching the database

### Frontend (Vanilla JS)

Handles:

* Adding users (modal form)
* Sorting users
* Updating user data
* Deleting users
* Showing notifications

---

## 🎨 Frontend Behavior

### 🏠 Home Page

* **Add User** → opens modal form
* **Sort** → toggles ASC/DESC
* Users displayed as cards

### ➕ Add User

* Opens modal
* Sends POST request
* Shows success/error notification

### 👁️ View Page

* Edit user data
* Submit updates via PATCH
* Delete user with confirmation

### 🔔 Notifications

* Success (green)
* Error (red)
* Auto-hide after 3 seconds

---

## ⚠️ Validation Rules

Using **Joi schema**:

* **First Name**

  * Required
  * 3–12 characters
  * Alphanumeric

* **Last Name**

  * Required
  * 4–15 characters
  * Alphanumeric

* **Age**

  * Required
  * Between 1 and 90

* **Gender**

  * Must be `"male"` or `"female"`

---

## ⚠️ Notes

* MongoDB must be running or accessible
* `.env` must be configured correctly
* IDs must be valid MongoDB ObjectIds
* Validation errors are returned with status **400**

---

## 📌 Future Improvements

* 🔍 Search & filtering
* 📄 Pagination
* 🔐 Authentication & authorization
* 🧪 Unit & integration tests
* 📊 Better UI/UX improvements

---

## 👨‍💻 Author

**Avo**

---

## 📄 License

MIT License

---