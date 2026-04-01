# Practice GitHub Workflows
Always check before commit.
Run both Frontend and backend folder with npm start
API KEY is from resend.com, use your github account
# Team Roles
Backend: Gutierrez, Mercado, Manalo, Paule
Frontend & Multimedia: Amores, Anastacio, Manalo
QA: Adigue

## ⚠️ Important Notes

* Do **not** upload `.env` files
* Do **not** upload `node_modules`

---

## 🖥️ Backend Setup

1. Navigate to backend folder:

```bash
cd backend
```

2. Initialize project:

```bash
npm init -y
```

3. Install core dependencies:

```bash
npm install express
```

4. Install additional dependencies:

```bash
npm install express cors body-parser http-proxy-middleware
```
```bash
npm install resend <this is for email api>
```

5. Update `package.json`:

* Change:

```json
"main": "index.js"
```

to:

```json
"main": "server.js"
```

* Add scripts:

```json
"scripts": {
  "start": "node server.js",
  "dev": "node server.js"
}
```

6. Run the server:

```bash
node server.js
```

---

## 🔄 Development Tools

1. Install Nodemon globally or root folder:

```bash
npm install -g nodemon
```

2. Run development mode:

```bash
npm run dev
```

---

## 🔐 Environment Variables

1. Install dotenv on /backend:

```bash
npm install dotenv
```

2. Create a `.env` file in `/backend`:

```env
PORT=3000
EMAIL_FROM= YOUR EMAIL
RESEND_API_KEY= SIGN UP IN RESEND.COM GET AND PASTE API KEY HERE
```

---

## 📦 .gitignore Setup

Create a `.gitignore` file and add:

```
node_modules/
.env
dist/
build/
npm-debug.log
.DS_Store
coverage/
.vscode/
.idea/
```

---

## 🌐 Frontend Setup

1. Go to project root:

```bash
cd ..
```

2. Create React app: 

```bash
npx create-react-app frontend
```

3. Navigate to frontend:

```bash
cd frontend
```

4. Install routing:

```bash
npm install react-router-dom
```

5. Fix vulnerabilities (optional):

npm audit fix --force
```
## Use your github account for resend.com
