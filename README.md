# Borrowly - Book Borrowing Platform

Borrowly is a modern web application where users can explore, browse, and borrow books easily. It provides authentication, categorized browsing, and a smooth UI experience.

---

## Live Demo

[Borrowly](https://borrowly-opal.vercel.app/)

---

## Features

- User Authentication (Email & Google Login)
- Browse and explore books
- Category-based filtering
- User profile management
- Fast and responsive UI
- Fully deployed on Vercel

---

## Tech Stack

- **Frontend:** Next.js
- **UI:** Tailwind CSS + HeroUI +dailyUI
- **Authentication:** Custom Auth Client (Email + Google OAuth)
- **State Management:** React Hooks
- **Notifications:** React Toastify
- **Deployment:** Vercel

---

## Project Structure

src/
├── app/
│ ├── page.jsx
│ ├── login/
│ ├── register/
│
├── components/
│ ├── homepage/
│ │ ├── Hero.jsx
│ │ ├── Categories.jsx
│ │ ├── FeaturedBooks.jsx
│ │ ├── WhyChooseUs.jsx
│ │ ├── Marquee.jsx
│
├── lib/
│ ├── auth-client.js

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/borrowly.git
cd borrowly
```

# Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/erpranto55/Borrowly-an-Online-Book-Borrowing-Platform
cd borrowly
```

### 2. Install dependencies

```bash
 npm install
```

### 3. Setup environment variables

Create a .env.local file and add:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
```

### 4. Run locally

```bash
npm run dev
```

# Authentication

Email/password login using authClient
Google OAuth (redirect-based)
Persistent user session
Toast notifications after successful login

# Author

### E.R Pranto

GitHub: [E.R. Pranto](https://github.com/erpranto55)
LinkedIn: [E.R. Pranto](https://www.linkedin.com/in/erpranto55/)
