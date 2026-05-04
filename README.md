# Borrowly - Book Borrowing Platform

Borrowly is a modern web application where users can explore, browse, and borrow books easily. It provides authentication, categorized browsing, and a smooth UI experience.<br>

---

## Live Demo

[Borrowly](https://borrowly-opal.vercel.app/)

---

## Features

- User Authentication (Email & Google Login)<br>
- Browse and explore books<br>
- Category-based filtering<br>
- User profile management<br>
- Fast and responsive UI<br>
- Fully deployed on Vercel<br>

---

## Tech Stack

- **Frontend:** Next.js<br>
- **UI:** Tailwind CSS + HeroUI +dailyUI<br>
- **Authentication:** Custom Auth Client (Email + Google OAuth)<br>
- **State Management:** React Hooks<br>
- **Notifications:** React Toastify<br>
- **Deployment:** Vercel<br>

---

## Project Structure

src/<br>
├── app/<br>
│ ├── page.jsx<br>
│ ├── login/<br>
│ ├── register/<br>
│<br>
├── components/<br>
│ ├── homepage/<br>
│ │ ├── Hero.jsx<br>
│ │ ├── Categories.jsx<br>
│ │ ├── FeaturedBooks.jsx<br>
│ │ ├── WhyChooseUs.jsx<br>
│ │ ├── Marquee.jsx<br>
│<br>
├── lib/<br>
│ ├── auth-client.js<br>

---

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

---

# Authentication

Email/password login using authClient<br>
Google OAuth (redirect-based)<br>
Persistent user session<br>
Toast notifications after successful login<br>

# Author

### E.R Pranto

GitHub: [E.R. Pranto](https://github.com/erpranto55)<br>
LinkedIn: [E.R. Pranto](https://www.linkedin.com/in/erpranto55/)
