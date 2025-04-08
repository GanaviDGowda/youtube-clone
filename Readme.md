# Backend Project Setup

## 1. Initializing the Project

- Run the following command to create a `package.json` file:
  ```sh
  npm init -y
  ```

## 2. Installing Dependencies

- Install **Express.js** for handling server requests:
  ```sh
  npm i express
  ```
- Install **development dependencies** like Prettier (for code formatting) and Nodemon (for automatic server restart):
  ```sh
  npm i -D nodemon prettier
  ```
- Install **dotenv** for managing environment variables securely:
  ```sh
  npm i dotenv
  ```

## 3. Project Structure

```
/project-root
│── /public
│   ├── /temp
│── /src
│   ├── /controllers
│   ├── /db
│   ├── /middlewares
│   ├── /models
│   ├── /util
│   ├── index.js
│   ├── app.js
│   ├── constant.js
│── .gitignore
│── .prettierrc
│── .prettierignore
│── .env
│── package.json
```

## 4. File and Folder Explanation

- **`.gitignore`** → Excludes unnecessary files (like `node_modules`, `.env`).
- **`.prettierrc`** → Configuration file for Prettier:
  ```json
  {
    "semicolon": true,
    "singleQuote": false,
    "trailingComma": "es5",
    "tabWidth": 2,
    "bracketSpacing": true
  }
  ```
- **`.prettierignore`** → Specifies files/directories to ignore during formatting:
  ```
  *.env
  .env.*
  node_modules
  ./dist
  /.vscode
  ```
- **`.env`** → Stores environment variables (e.g., database credentials).
- **`/public/temp`** → Placeholder for temporary public files (e.g., uploaded files).
- **`/src/controllers`** → Contains request handling logic.
- **`/src/db`** → Database connection and queries.
- **`/src/middlewares`** → Middleware functions for request processing.
- **`/src/models`** → Defines database models/schema.
- **`/src/util`** → Utility/helper functions.
- **`src/index.js`** → Entry point for the server.
- **`app.js`** → Sets up the Express application.
- **`constant.js`** → Stores constants and configurations.

## 5. Running the Project

- Start the server in development mode using Nodemon:
  ```sh
  npm run dev
  ```

## 6. Best Practices

- Keep sensitive data in the `.env` file.
- Use **Prettier** to format the code for consistency:
  ```sh
  npx prettier --write .
  ```
