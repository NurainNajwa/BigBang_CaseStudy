# BigBang_CaseStudy

This script generates an array of numbers from 1 to 100, replacing multiples of 3 with "BIG", multiples of 5 with "BANG", and multiples of both 3 and 5 with "BIGBANG". The result is saved to `output.json`.

## How to Run

### Step 1: Ensure you have Node.js installed on your system (Node.js 12+ recommended).
### Step 2: Clone the repository.
   ```sh
   git clone https://github.com/NurainNajwa/BigBang_CaseStudy.git
   cd BigBang_CaseStudy
   ```

1. OPTION 1 <default json>
#### Install TypeScript and the necessary dependencies.
    ```sh
    npm install
    npm install -g typescript
    ```
#### Run the script
    ```sh
    npm start
    ```
If you prefer to run manually, use command below: 
#### Compile the TypeScript script.
  
    ```sh
    tsc bigbang.ts
    ```
#### Run the compiled JavaScript file.
  
    ```sh
    node bigbang.js
    ```
  
    This will generate output.json in the current directory.

2. OPTION 2 
#### Install ts-node and typescript.
    ```sh
    npm install
    npm install -g ts-node typescript
    ```
#### Run the script directly using ts-node:
  
    ```sh
    ts-node bigbang.ts
    ```
  
    This will generate output.json in the current directory.

### Step 3: Setup package.json

Create a `package.json` file to manage dependencies.

**package.json:**
```json
{
  "name": "BigBang_CaseStudy",
  "version": "1.0.0",
  "description": "A script to generate an array with BIG, BANG, and BIGBANG replacing multiples of 3 and 5",
  "main": "bigbang.js",
  "scripts": {
    "start": "tsc bigbang.ts && node bigbang.js"
  },
  "dependencies": {
    "@types/node": "^20.0.0"
  },
  "devDependencies": {
    "typescript": "^4.0.0"
  },
  "author": "",
  "license": "ISC"
}
```
### Step 4: Push to GitHub
1. Initialize a new repository:

```sh
git init
git add .
git commit -m "Initial commit"
```
2. Create a new repository on GitHub:
Go to GitHub and create a new repository named BigBang_CaseStudy.

3. Add the remote and push:

```sh
git remote add origin https://github.com/yourusername/BigBang_CaseStudy.git
git branch -M main
git push -u origin main
```

Complete Directory Structure
BigBang_CaseStudy/
│
├── bigbang.ts
├── README.md
└── package.json



This template includes instructions for setting up, running, and pushing your TypeScript project to GitHub. Adjust it as needed for your specific project details.
