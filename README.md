# Recipe Blog

A high-performance, containerized recipe blog built with **Next.js**, **Tailwind CSS**, and **Docker**. This project demonstrates modern web development practices including Internationalization (i18n), Static Site Generation (SSG), Image Optimization, and a flexible CMS integration layer.

## Quick Start (Docker)

The application is fully containerized and designed to run with a single command.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/vivekkantipudi/recipe-blog.git]
    cd recipe-blog
    ```

2.  **Run with Docker Compose**
    ```bash
    docker-compose up --build -d
    ```

3.  **Access the Application**
    * **Website:** [http://localhost:3000](http://localhost:3000)
    * **Health Check:** [http://localhost:3000/api/health](http://localhost:3000/api/health)
    * **Sitemap:** [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)

---

## 🛠️ Tech Stack

* **Framework:** Next.js 14 (Pages Router)
* **Styling:** Tailwind CSS
* **Internationalization:** next-i18next (i18n)
* **Containerization:** Docker & Docker Compose
* **Image Optimization:** Next.js Image Component + Sharp
* **CMS Integration:** Modular architecture supporting Contentful, Sanity, or Local Mock Data.

---

## 📂 Project Structure

```text
recipe-blog/
├── components/          # Reusable UI components (RecipeCard, Layout, etc.)
├── lib/                 # Data fetching logic (API layer)
├── pages/               # Application routes
│   ├── api/             # API routes (Health check)
│   ├── recipes/         # Dynamic recipe routes ([slug].js)
│   ├── _app.js          # App entry point
│   ├── index.js         # Homepage (SSG)
│   └── sitemap.xml.js   # Dynamic sitemap generator
├── public/
│   └── locales/         # i18n JSON translation files (en, es, fr)
├── styles/              # Global styles and Tailwind imports
├── .env.example         # Template for environment variables
├── docker-compose.yml   # Docker services configuration
├── Dockerfile           # Multi-stage Docker build instruction
└── next.config.js       # Next.js & i18n configuration
