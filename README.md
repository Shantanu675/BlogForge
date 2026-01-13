# 📝 Post – Full Stack Blogging Platform

MegaBlog is a modern **full-stack blogging application** built with **React**, **Redux**, **Appwrite**, and **Tailwind CSS**.  
It allows users to create, edit, and manage blog posts with authentication, image uploads, rich text editing, and responsive UI.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Sign up, login, and logout using Appwrite Authentication
- ✍️ **Create & Edit Posts**
  - Rich Text Editor for writing content
  - Auto-generated SEO-friendly slugs
- 🖼️ **Image Uploads**
  - Featured image upload & replacement using Appwrite Storage
- 🧑‍💻 **Author Information**
  - Displays post author name & email
- 📱 **Fully Responsive UI**
  - Optimized for mobile, tablet, and desktop
- 🧠 **State Management**
  - Redux Toolkit for authentication state
- 🗑️ **Post Management**
  - Edit & delete posts (author-only access)
- ⚡ **Fast & Modern UI**
  - Tailwind CSS for styling

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **React Router**
- **Redux Toolkit**
- **React Hook Form**
- **Tailwind CSS**
- **Lucide Icons**

### Backend / Services
- **Appwrite**
  - Authentication
  - Database
  - Storage


---

## 🔑 Authentication Flow

1. User logs in / signs up via Appwrite
2. User data is fetched using `account.get()`
3. User data is stored in Redux (`authSlice`)
4. Protected actions (create/edit/delete post) use Redux auth state

---

## 🧾 Post Data Includes

- Title
- Slug
- Rich content
- Featured image
- Status (active / inactive)
- Author ID
- Author name & email

---



