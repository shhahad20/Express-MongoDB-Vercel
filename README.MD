# Express & MongoDB on Vercel
### I will show you how to deploy your backend that uses Express and Mongodb on Vercel 👩🏼‍💻 (TypeScript)


First, thing you need to know is that Vercel requires plain JS source files instead of TypeScript. So, you need to build the project and send the compiled JS files so that Vercel can parse them and serve the API.

- To initialize TypeScript configration file.
```sh
npx tsc --init
```

- You need to update your scripts in package.json file, and add those lines 
```sh
        "ts-watch": "tsc -w",
        "start": "nodemon dist/api/index.js", 
        "build": " dist && tsc",
```

- Run ``` tsc -w ``` command to initialize dist folder. 
dist folder will holds all the compiled JS files. 
- Build the server and run it. I used ( nodemon ).
- Build your routers and conrollers and connect them with mongoDB. 
### 
1. You need to install [dotenv](https://www.npmjs.com/package/dotenv). And create the **.env** file in the root directory and import it in the index.ts. 
###
``` import 'dotenv/config' ```

2. Inside the .env file put your URI for the mongoDB and make sure to name the env variable ```MONGODB_URI``` because as in the mongo doc ```MONGODB_URI```
serves as the Atlas cluster's connection string for all Vercel projects that you link this cluster to.
###
3.  Do not forget to carete .gitignore and ignore node_modules and .env files and DO NOT ignore  ❗ ``` dist ``` ❗ file.
###
4. Build the project to make sure the dist file is updated, then run in development mode to test your server. If everthing works fine ✅ we can move on to the next and most important steps.
###
5. Add ```vercel.json``` file in the root dir. 
### 
```json
{
    "version": 2,
    "builds": [
      {
        "src": "dist/api/index.js",
        "use": "@vercel/node",
        "config": { "includeFiles": ["dist/api/**"] }
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "dist/api/index.js"
      }
    ]
  }
```
6. Publish your project to Github.
###
7. Create a Vercel project and import the project repo.
## 
8. Add the Environment Vars and deploy.
###
9. Go to vercel dashboard and select integrations, selcet MongoDB.
###
10. Follow the steps from here [Connect mongoDB to vercel](https://www.mongodb.com/developer/products/atlas/how-to-connect-mongodb-atlas-to-vercel-using-the-new-integration/)
& [Partner integrations](https://www.mongodb.com/docs/atlas/reference/partner-integrations/vercel/).
###
11. Copy your backend and paste it in your frontend 🎉🎉
###
#
### Notes:
1.  Make sure when you import in your ts files to be like this 
###
   ``` import { home } from "../controllers/homeController.js"; ``` 
   with **.js** extenstion and **{ }**. But in index.ts (the server file) use this  ``` import homeRouter from '../src/routers/homeRouter.js'; ```
 without { }.
 ###
2. Make sure also that your ```tsconfig.json``` file to have ```"outDir": "./dist"```.
3. Sometimes you need to **Reconnect with db** or **Re-Deploy** .
#
