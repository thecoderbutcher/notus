
![App logo]()

Notus is a comprehensive solution for managing private educational institutions. It allows you to manage students, teachers, classes, assignments, assessments, events, and much more, all from a single, modern, secure, and accessible platform.



## 📸 Screenshots

![App Screenshot]()


## ⭐ Features

🧑‍🎓 Student Management
- Student registration, editing, withdrawal, and reactivation
- Complete profile with academic history and documentation
- Course and level registration
- Performance and status monitoring

👨‍🏫 Teacher Management
- Teacher registration and administration
- Subject and schedule assignment
- Attendance and performance monitoring
- Document management and training

🏫 Academic Management
- Creation of academic terms, levels, courses, and subjects
- Academic planning and schedules
- Subject assignment to teachers and students
- Curriculum monitoring

📅 Attendance control
- Daily attendance record by course
- Absence justification
- Detailed reports
- Automatic alerts

📝 Assessments and grading
- Exam creation and management
- Automatic grade uploading and calculation
- Downloadable report cards
- Access to notes for Parents and Students

📚 Assignments and Content
- Posting Assignments and Submissions
- Corrections and Feedback
- Materials Repository (PDFs, videos, links)

📆 Events and Calendar
- Management of Institutional Events
- Notifications and Reminders
- Holidays, Events, Meetings, etc.

💬 Communications
- Internal messaging between users
- Circulars and announcements
- Automatic notifications by activity
- Email, push, and SMS alerts

📁 Documentation and files
- Upload certificates, authorizations, and institutional files
- Personal folders for each user
- Quick download and printing

🧾 Administrative and financial management
- Tuition and fees per student
- Billing and payment control
- Online or manually recorded payments
- Accounting reports

🧑‍💼 User and role management
- Different profiles: administrator, teacher, student, parent
- Permission and access control
- Session and password security

📊 Reports and analytics
- Academic performance and attendance reports
- Institutional and course statistics
- Export to PDF, Excel, and CSV
- Real-time dashboards

🔐 Security and backup
- Secure authentication
- Automatic backups
- Sensitive data encryption
- Audit logs

🌐 Web and mobile platform
- Accessible from any modern browser
- Mobile app for students, parents, and teachers
- Push notifications

🔄 External integrations
- Video calls (Google Meet, Zoom, Jitsi)
- Accounting systems and payment platforms
- Public APIs for extensions
## 🖥️ Run Locally

Clone the project

```bash
  git clone https://github.com/thecoderbutcher/notus.git
```

Go to the project directory

```bash
  cd singularity
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your .env file

APP DETAILS:
`APP_NAME=""`

AUTHJS
`AUTH_SECRET=""`

DATABASE
`DB_USER=""`
`DB_PASSWORD=""`
`DATABASE_URL=""`
`DIRECT_URL=""`

GOOGLE
`GOOGLE_CLIENT_ID=""`
`GOOGLE_CLIENT_SECRET=""`

`SMTP_EMAIL=""`
`SMTP_PASSWORD=""`


## 🗂️ Architecture

#### General
```javascript
app/
├── (auth)/
├── (landing)/
├── (protected)/
├── api/
└── providers/
```

#### auth
```javascript
(auth)/
├── components/
├── error/
├── lib/
├── login/
│   ├── action/
│   ├── components/
│   └── page.tsx
├── logout/
├── new-password/
├── new-verification/
├── register/
├── reset/
└── layout.tsx
```
#### Frontend
```javascript
(protected)/
├── announcements/
├── assignments/
├── attendance/
├── components/
├── dashboard/
├── events/
├── exams/
├── lessons/
├── messages/
├── parents/
├── results/
├── students/
├── subjects/
├── teachers/
│   ├── create/
│   │   ├── components/
│   │   ├── action.ts
│   │   ├── dto.ts
│   │   ├── mapper.ts
│   │   ├── page.tsx
│   │   └── schema.ts
│   ├── delete/
│   ├── list/
│   ├── update/
│   ├── view/
│   └── page.tsx
├── user/
└── layout.tsx
```
## 🚀 Tech Stack

- Typescript
- React
- TailwindCSS
- Node
- NextJs
- Prisma
- Postgrsql

## 🤝 Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started. (coming soon)

Please adhere to this project's `code of conduct`.


## 📚 Lessons Learned

In this project, I applied hexagonal architecture as a practical approach. It was developed with NextJS, which meant familiarizing myself with this framework, but because it's based on JavaScript, the learning curve was easier.

## 📜 License

[MIT](https://choosealicense.com/licenses/mit/)


## 🧑🏾‍💻 Authors

- [@thecoderbutcher](https://thecoderbutcher.site)

