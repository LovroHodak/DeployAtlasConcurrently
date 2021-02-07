Full Stack eCommerce Cart build (React, Redux, Node, Express, MongoDB)...From Scratch - [The Full Stack Junkie] - youtube 3.45.59

1. created empty folder "learnDB" and opene in VSC
2. npm init -y
3. mkdir frontend (creates frontend inside "learnDB")
4. mkdir backend (creates backend inside "learnDB")
5. npm i express mongoose dotenv
6. npm i --save-dev nodemon concurrently (so i will be able to run front and back with one command)

7. cd frontend
8. npx create-react-app . (creates react app in that folder)

in backend 
9. create index.js (require('dotenv').config(), const express, const app, const PORT, app.listen)

10. global file .env (PORT=5000, MONGO_URI=)
11. global file .gitignore ()

12. node backend/index.js (to check if server is running)

13. a) go to fronted folder-.gitignore and copy paste everything in our GLOBAL .gitignore

b) replace 
(/node_modules) 
with 
(node_modules
node_modules/)

14. cd frontend
15. Remove-Item -Recurse -Force .git (deletes .git)
16. ls (to see that .git is deleted)
17. fizically delete .gitignore from frontend

18. cd .. (navigate to global "learnDB")
19. git init (creates global git repo --it also shadows node_modules)

20. go to global .gitignore and under .DS_Store add .env
21. go to global package.json replace in "scripts"
("test": "echo \"Error: no test specified\" && exit 1")
with
(    "start": "node backend/index.js",
    "server": "nodemon backend/index.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\"")

in global
22. npm run dev

EVERYTHING SHOULD WORK!! FRONT+BACK RUNNING WITH ONE COMMAND

BACKEND
1. cd backend
2. create folders (config, models, data)
3. in config folder create db.js (fill it up!!!!)
4. in index.js copy paste (require('./config/db'))

MONGODB ATLAS - lovro123
1. a)left up (folder icon) create new project b) name c)create project
2. a) build a cluster b) free c)aws - frankfurt AND (below) Cluster name d) create cluster
3. Database access
4. a) add new database user b) password c) add user
5. Network access
6. a) Add an IP address b) allow access from anywhere c) confirm
7. Clusters
8. a) connect b) connect your application c) copy MONGO_URI (that string with password and dbname)

BACKEND
1. .env (paste MONGO_URI) and change password and db name
2. cd backend
3. node index.js

EVERYTHING SHOULD WORK!! YOUR ATLAS SHOULD BE CONNECTED

BACKEND
1. in models folder create product.model.js (fill it up!!!!)
2. in data folder create shopItems.js (fill it up!!!!)
3. in backend create seederScript.js file (fill it up!!!!)
4. in package.json add another script ("data:import": "node backend/seederScript")
5. npm run data:import (go to ATLAS - clusters - your cluster - collections)

EVERYTHING SHOULD WORK!! YOUR ITEMS SHOULD BE IN ATLAS



BACKEND
1. folder routes inside file products.routes.js (fill it up!!!!)

2. go to index.js 
a) npm i body-parser cors
b) add cors and body parser
c) add routes

FRONTEND
1. clean src (delete: setupTests, reportWebVitals, App.test.js, logo, )
2. cd frontend
3. npm i react-router-dom axios
4. go to index.js and import {browserRouter}
5. go to App.js and import {useState, useEffect} {Switch, Route, withRouter} and axios (export default withRouter(App))
6. useEffect - with axios fetch data and setState to response.data
7. create components folder and inside Home component
8. in App create Switch and inside put Route with exact path which renders Home and sends state to it

EVERYTHING SHOULD WORK!! YOUR WEBSITE WORKS
