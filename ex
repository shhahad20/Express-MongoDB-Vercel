1. npx tsc --init <- to initialize TypeScript configration file. 
2.       "ts-watch": "tsc -w",
        "start": "nodemon dist/api/index.js", 
        "build": " dist && tsc",
 <- add these lines to your script in package.json
3. run ( tsc -w ) command to initialize dist folder
4. build the server and run it with (nodemon)
5. Make sure when you import to be like this ( import { home } from "../controllers/homeController.js";)
with js extenstion and {}. but in index.ts (the server file) use this (import homeRouter from '../src/routers/homeRouter.js'
) without {}.
6. build your routers and conrollers and connect them with mongoDB
7. install dotenv, and create the .env file in the root and import it in the index ( import 'dotenv/config').
8. Inside the env file put your URI for the mongoDB and make sure to name the mongodb variable "MONGODB_URI" because as in the mongo doc "MONGODB_URI"
serves as the Atlas cluster's connection string for all Vercel projects that you link this cluster to.
9. build the project to make sure the dist file is updated, then run in development mode to test your server. 
10. publish you project to Github.
11. Do not forget to carete .gitignore and ignore node_modules and .env files.
12. 