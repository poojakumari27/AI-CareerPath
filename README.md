#  AI-CareerPath — AI-Powered Career Platform  
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://ai-career-path-ef25.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/poojakumari27/ai-careerpath)

## 🚀 Overview

**AI-CareerPath** is a full-stack AI-powered career platform that helps users build resumes, generate cover letters, and prepare for interviews — all tailored to their target roles. It integrates modern AI tools like **Gemini API** and **Inngest** to provide personalized insights and automate content creation.

This project was inspired by [this walkthrough](https://youtu.be/UbXpRv5ApKA?si=EVvNWi9AdCD9T8RL) and expanded with custom features for enhanced career planning.

## ✨ Features

- 📝 **Resume Builder**: Create professional resumes using dynamic markdown + form builder.
- 📨 **AI Cover Letter Generator**: Generate job-specific cover letters with custom prompts.
- 🎯 **Interview Prep & Insights**: Get tailored questions and insights based on job title.
- ⚡ **AI Automation**: Gemini + Inngest power automatic content generation and scheduling.
- 📊 **Skill Gap Analysis**: Highlights required skills based on job market trends.
- 🎨 **Modern UI**: Designed with **Tailwind CSS** and **Shadcn** components.
- 🔐 **Authentication**: Secured using **Clerk**.

🧠 How It Works
Users input their contact information, professional summary, work history, education, skills, and projects.

The app dynamically compiles this data into a clean Markdown-based resume that can be previewed or downloaded as a polished PDF.

For any job title and company, users can generate personalized AI-powered cover letters using Gemini.

Interview preparation tools provide tailored, AI-generated interview questions based on the user's experience and the job role selected, helping users get job-ready.

Inngest handles background tasks like scheduling skill assessment events and tracking progress.

Gemini AI powers real-time insights such as:

Industry trends

Skill gap analysis


## 🧰 Tech Stack

| Frontend | Backend | AI & Tools | Database | Auth |
|----------|---------|-------------|----------|------|
| Next.js 15 | Inngest | Gemini API (Google AI) | Prisma + NeonDB | Clerk |
| React 19  | Vercel Functions | Markdown Editor | PlanetScale-ready | Clerk UI |
| Tailwind CSS | Server Actions | html2pdf.js | | |

## 🗂️ File Structure Highlights

```
ai-careerpath/
├── app/
│   ├── resume/               # Resume builder pages & components
│   ├── ai-cover-letter/      # Cover letter generation pages
│   ├── lib/                  # Helpers, schemas, and inngest clients
├── components/               # UI components (Button, Tabs, Inputs, etc.)
├── public/                   # Static assets
├── prisma/                   # Prisma schema and seed data
├── styles/                   # Global and tailwind styles
├── .env                      # Environment variables
├── README.md                 # You're reading it :)
```

## ⚙️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/poojakumari27/ai-careerpath
   cd ai-careerpath
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up `.env` file**
   ```env
   DATABASE_URL=...
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
   CLERK_SECRET_KEY=...
   GEMINI_API_KEY=...
   ```

4. **Run Prisma**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Start the dev server**
   ```bash
   npm run dev
   ```

## 📌 Customization

- **Add/Edit AI prompts** in `/lib/ai/` folder.
- **Configure Inngest tasks** in `/lib/inngest/function.js`.
- **Edit themes/components** using Tailwind and Shadcn in `/components/ui/`.


## 🔐 License

MIT License  
Made with ❤️ by Pooja Kumari
