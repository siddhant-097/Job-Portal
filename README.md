# CareerNexo – Full-Stack MERN Job Portal

A full-stack MERN-based Job Application Portal that connects job seekers with recruiters through a modern and user-friendly platform. CareerNexo enables recruiters to post jobs, manage applications, and review candidate profiles, while applicants can search for jobs, upload resumes, and track their applications.

## 🚀 Features

### 👨‍💼 Applicant Features
- User authentication and authorization
- Browse available job listings
- Search and filter jobs
- View detailed job descriptions
- Apply for jobs with resume submission
- Track application status
- Manage profile information

### 🏢 Recruiter Features
- Recruiter authentication
- Create and manage job postings
- View applicants for posted jobs
- Access candidate resumes
- Update application status
- Manage company profile

### 🔒 Security & Authentication
- Secure authentication using Clerk
- Protected routes and role-based access
- Secure API communication
- Cloud-based resume storage

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Clerk

### Cloud Services
- Cloudinary (Resume & Image Storage)

### Deployment
- Vercel

---

## 📂 Project Structure

```bash
CareerNexo/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
│
├── README.md
└── .env
```

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have installed:

- Node.js
- MongoDB
- Git

### Clone the Repository

```bash
git clone https://github.com/your-username/CareerNexo.git
cd CareerNexo
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the server directory:

```env
MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the backend server:

```bash
npm run server
```

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

---

## 📸 Screenshots

Add screenshots of:

- Home Page
```md
![Home Page](C:\Users\siddh\Pictures\Screenshots/Screenshot 2026-06-18 190350.png)
```

---

- Job Listings Page
```md
![Job Listings Page](C:\Users\siddh\Pictures\Screenshots/Screenshot 2026-06-18 190401.png)
```

---

- Job Details Page
```md
![Job Details Page](C:\Users\siddh\Pictures\Screenshots/Screenshot 2026-06-18 191156.png)
```

---

- Recruiter Dashboard
```md
![Recruiter Dashboard](C:\Users\siddh\Pictures\Screenshot/Screenshot 2026-06-18 191337.png)
```

---

- Application Management Dashboard
```md
![Application Management Dashboard](C:\Users\siddh\Pictures\Screenshot/Screenshot 2026-06-18 191537.png)
```

---


## 🔄 Application Workflow

1. User signs up or logs in.
2. Applicants browse available jobs.
3. Applicants upload resumes and submit applications.
4. Recruiters create and manage job postings.
5. Recruiters review applications and resumes.
6. Recruiters update application statuses.
7. Applicants track application progress.

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Full-Stack MERN Development
- REST API Development
- Authentication & Authorization
- MongoDB Database Design
- Cloudinary Integration
- Role-Based Access Control
- State Management in React
- Deployment & Production Hosting

---

## 🌐 Live Demo

**Frontend:** https://careernexo.vercel.app/

**Backend API:** https://careernexo-server.vercel.app/

---

## 📌 Future Enhancements

- Email notifications for application updates
- Advanced job recommendation system
- Interview scheduling feature
- Resume parsing and analysis
- Admin dashboard
- Real-time messaging between recruiters and applicants

---

## 👨‍💻 Author

**Siddhant Chaudhary**

- GitHub: https://github.com/siddhant-097
- LinkedIn: linkedin.com/in/siddhantchaudhary097

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.