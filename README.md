# HACFY - Cybersecurity Landing Page

A modern, responsive cybersecurity landing page built with **Next.js**, **TypeScript**, and **Framer Motion**.

## 🚀 Features

- **Modern UI/UX**: Clean and professional design tailored for cybersecurity services.
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop).
- **Smooth Animations**: Powered by `framer-motion` for an engaging user experience.
- **Dynamic Service Pages**: Automatically generated pages for different cybersecurity services.
- **Contact Form**: Integrated with **Supabase** for secure form submissions and lead management.
- **SME & Corporate Focus**: Specialized sections for different business sectors.
- **Career Section**: Dedicated area for job opportunities and recruitment.
- **Modular Components**: Built with reusable React components and CSS Modules.
- **Type Safety**: Fully typed with TypeScript for better developer experience and reliability.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Backend/Database**: [Supabase](https://supabase.com/)
- **Styling**: CSS Modules
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Custom locally hosted fonts

## 📂 Project Structure

- `app/`: Next.js App Router pages and global styles.
  - `contact/`: Contact page with Supabase form integration.
  - `services/`: Dynamic service pages based on slug.
- `components/sections/`: High-level page sections.
  - `Hero`, `ModernBusinesses`, `SMESectors`, `TrustedServices`, `Testimonials`, `Resources`, `Careers`, `Footer`.
- `components/ui/`: Reusable UI components.
  - `Button`, `Card`, `Navbar`, `Section`.
- `lib/`: Utility functions and data.
  - `countries.ts`: Country data for forms.
  - `services-data.ts`: Static data for service pages.
  - `supabase.ts`: Supabase client configuration.
- `public/`: Static assets (images, custom fonts).
- `supabase_schema.sql`: Database schema for contact submissions.

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd HACFY
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Database Setup**:
   Run the SQL commands found in `supabase_schema.sql` in your Supabase SQL Editor to set up the `contact_submissions` table and RLS policies.

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
