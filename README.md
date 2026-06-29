# UserBase App

A full-stack React application with user authentication and post management, built as a practice project to learn modern React ecosystem tools.

---

## 🚀 Features

- User Registration & Login (Supabase Auth)
- Protected Routes — unauthorized users redirected to login
- Create, Read, Delete Posts
- Persistent authentication with Redux Persist
- Dark / Light theme toggle
- Form validation with error messages
- Automatic token injection via Axios Interceptor

---

## 🛠️ Tech Stack

| Package | Purpose |
|---|---|
| React.js | Frontend framework |
| React Router DOM | Client-side routing |
| Tailwind CSS | Utility-first styling |
| Shadcn UI | Prebuilt UI components |
| React Hook Form | Form handling & validation |
| React Redux | Global state management |
| Redux Persist | Persist Redux state in localStorage |
| Axios | HTTP requests with interceptor |
| React Data Table Component | Displaying posts in a table |
| Supabase | Backend (Auth + Database) |

---

## 📁 Project Structure

```
src/
├── api/
│   └── axiosInstance.js
├── components/
│   ├── header/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── CreatePost.jsx
│   │   ├── Dashboard.jsx
│   │   ├── PostList.jsx
│   │   ├── SignIn.jsx
│   │   └── SignUp.jsx
│   ├── store/
│   │   ├── authSlice.js
│   │   └── store.js
│   ├── ui/
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   └── label.jsx
│   └── ProtectedRoute.jsx
├── lib/
│   └── utils.js
├── App.jsx
└── main.jsx
```

---

## ⚙️ Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/ali-webcraft/userbase-app.git
cd userbase-app

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

---

## 📌 API Endpoints Used

Base URL: `https://tkamgepjdnhwdqelesvk.supabase.co`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/v1/signup` | Register new user |
| POST | `/auth/v1/token?grant_type=password` | Login user, get token |
| GET | `/auth/v1/user` | Get logged-in user profile |
| GET | `/rest/v1/posts` | Fetch all posts |
| POST | `/rest/v1/posts` | Create new post |
| DELETE | `/rest/v1/posts?id=eq.{id}` | Delete post by ID |

---

## 🔐 How Authentication Works

1. User logs in → Supabase returns `access_token`
2. Token saved in Redux store (persisted via Redux Persist)
3. Axios interceptor automatically attaches token to every request
4. Protected routes check token — redirect to login if missing
5. Logout clears token from Redux store

---

## 👨‍💻 Developer

**Muhammad Ali** — [@ali-webcraft](https://github.com/ali-webcraft)

*Practice Task 2 — React Full Stack Project*