# 🌍 Basic_API

## 📌 Project Description

This is a simple public API that returns the following details in JSON format:

- My **email address**
- The **current datetime** in ISO 8601 UTC format
- The **GitHub repository URL** for this project

The API is built with **Node.js** and **Express.js** and is deployed on a publicly accessible endpoint.

`current_datetime` is **dynamically** generated in UTC
Uses **CORS** for cross-origin access

## ⚙️ Setup Instructions

### **1️⃣ Clone the Repository**

```sh
git clone [github_repo](https://github.com/darionnuel/basic_api.git)
cd basic_api
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Run the Server Locally**

The server will start on <http://localhost:3000>

```sh
node index.js
```

## Usage

### 🌐 Endpoint

`GET /`

### Response

```json
{
  "email": "emmanueloguneko@gmail.com",
  "current_datetime": "2025-01-30T12:11:18.035Z",
  "github_url": "[github repo](https://github.com/darionnuel/basic_api)"
}
```

## 🚀 Deployment

The API is live at:
[🔗 basic_api](https://basic-api-rrr9.onrender.com)

🔨 Built with ❤️ using Node.js & Express
📌 Maintained by Emmanuel Oguneko

## 📢 Hire Me

👨‍💻 Looking for a skilled Node.js developer? Check out:
[🔗 HNG Node.js Developers](https://hng.tech/hire/nodejs-developers)
