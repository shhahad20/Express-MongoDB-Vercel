# Express & MongoDB on Vercel
### I will show you how to deploy your backend that uses Express and MongoDB on Vercel 👩🏼‍💻 (TypeScript)


First thing you need to know is that Vercel requires plain JS source files instead of TypeScript. So, you need to build the project and send the compiled JS files so that Vercel can parse them and serve the API.

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
The dist folder will hold all the compiled JS files. 
- Build the server and run it. I used ( nodemon ).
- Build your routers and controllers and connect them with mongoDB. 
### 
1. You need to install [dotenv](https://www.npmjs.com/package/dotenv). Create the **.env** file in the root directory and import it in the index.ts. 
###
``` import 'dotenv/config' ```

2. Inside the .env file, put your URI for MongoDB and make sure to name the environment variable ```MONGODB_URI```, because, mentioned in the MongoDB documentation, ```MONGODB_URI```
serves as the Atlas cluster's connection string for all Vercel projects that you link this cluster to.
###
3.  Do not forget to carete a .gitignore file. Ignore node_modules and .env files and DO NOT ignore  ❗ ``` dist ``` ❗ folder.
###
4. Build the project to make sure the dist folder is updated, then run it in development mode to test your server. If everthing works fine ✅, we can move on to the next and most important steps.
<img src="https://github.com/shhahad20/Express-MongoDB-Vercel/blob/master/assets/images/home.png" width="50%">

🔸 You can use **Postman** to test the HTTP requests.

###
5. Add ```vercel.json``` file in the root directory. 
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
6. Publish your project to GitHub.
###
7. Create a Vercel project and import the repository.
## 
8. Add the environment variables and deploy.
<img src="https://github.com/shhahad20/Express-MongoDB-Vercel/blob/master/assets/images/env-vars.png" width="50%">

###
9. Go to the Vercel dashboard and select Integrations, then selcet MongoDB.
###
10. Follow the steps from here [Connect mongoDB to vercel](https://www.mongodb.com/developer/products/atlas/how-to-connect-mongodb-atlas-to-vercel-using-the-new-integration/)
& [Partner integrations](https://www.mongodb.com/docs/atlas/reference/partner-integrations/vercel/).
###
11. Test the requests.
<img src="https://github.com/shhahad20/Express-MongoDB-Vercel/blob/master/assets/images/lists.png" width="50%">

###
12. Copy your backend URL and paste it in your frontend 🎉🎉
###
#

> :information_source: **Notes**
 1.  Make sure when you import in your TypeScript files to do it like this:
 ###
   ``` import { home } from "../controllers/homeController.js"; ``` 
   with the **.js** extenstion and **{ }**.However, in index.ts (the server file) use this:  ``` import homeRouter from '../src/routers/homeRouter.js'; ```
 without { }.
 ###
2. Make sure that your ```tsconfig.json``` file includes ```"outDir": "./dist"```.
3. Sometimes you need to **Reconnect with the database** or **Re-deploy in Vercel**.
###
4. You can deploy your project from the terminal

###
:file_folder: You can check the files in the repo for more details. 
#
