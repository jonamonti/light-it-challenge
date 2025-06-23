# 🚀 Light-IT Challenge - Patient Registration App

This is a full-stack web application built for the Light-IT FullStack Programming Challenge. It allows users to register patients and view their information.

---

## 🗂 Project Structure

```
light-it/
├── api/            # Node.js backend with Prisma + PostgreSQL + TypeScript
├── frontend/       # React frontend built with Vite
├── docker-compose.yml
```

---

## 📦 Requirements

Before you begin, ensure you have:

* [Docker](https://www.docker.com/products/docker-desktop) installed (Docker Desktop recommended)
* Docker Compose (comes with Docker Desktop)

---

## 📥 Clone the Repository

```bash
git clone https://github.com/jonamonti/light-it-challenge.git
cd light-it
```

---

## ⚙️ Environment Setup

Inside the `api/` folder, make sure a `.env` file exists with the following content:

```env
DATABASE_URL="postgresql://light-it-challenge@db:5432/patients"
PORT=1985

SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-pass
```

> ✅ Use [Mailtrap](https://mailtrap.io/) credentials for email testing.

---

## 🐳 Run the App

From the root of the project:

```bash
docker compose up --build
```

This will:

* Build and run the **backend** (`api`)
* Build and run the **frontend** (`frontend`)
* Run the **PostgreSQL** database (`db`)

> API will be available at: `http://localhost:1985/api`
>
> Frontend will be available at: `http://localhost:5173`

---

## 🧪 Test the App

1. Open your browser and navigate to [http://localhost:5173](http://localhost:5173)
2. Register a new patient.
3. Check Mailtrap inbox for email confirmation (if configured).

---

## 🧹 Cleanup

To stop and remove all containers:

```bash
docker compose down
```

To remove volumes (e.g. for a fresh DB):

```bash
docker compose down -v
```

---

Hope you like it! 🎉
