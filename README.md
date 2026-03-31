# Practice-GitHub-Workflows
Do not upload env and node modules

# BACKEND SETUP
cd backend
npm init -y
npm install express

# Still /backend cors are for browsers
change 'main' to server.js from package.json
add on "scripts:
    "start": "node server.js",
    "dev": "node server.js"
    
npm install express cors body-parser http-proxy-middleware
now check with command node server.js

npm install -G nodemon
command npm run dev

# Install dotenv and create .env
PORT=3000
on backend, npm install dotenv

# Create .gitignore and add:
node_modules/
.env
dist/
build/
npm-debug.log
.DS_Store
coverage/
.vscode/
.idea/
