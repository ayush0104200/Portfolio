# Portfolio Backend Setup

This backend handles contact form submissions and stores them in MongoDB.

## Features
- Contact form API endpoint
- MongoDB database integration
- CORS enabled for frontend communication
- Input validation
- RESTful API endpoints for managing contacts

## Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (for cloud database) or local MongoDB
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB connection string:
```
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## Getting MongoDB Connection String

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Click "Connect" and copy your connection string
5. Replace `username` and `password` with your MongoDB credentials

## Running the Backend

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Submit Contact Form
- **POST** `/api/contact/submit`
- Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I have a project..."
}
```

### Get All Contacts
- **GET** `/api/contact/all`

### Get Single Contact
- **GET** `/api/contact/:id`

### Mark Contact as Read
- **PATCH** `/api/contact/:id/read`

### Delete Contact
- **DELETE** `/api/contact/:id`

### Health Check
- **GET** `/api/health`

## Frontend Integration

The Contact component automatically sends data to the backend when the form is submitted. Make sure:
1. Backend is running on `http://localhost:5000`
2. Frontend is running on `http://localhost:5173`
3. CORS is properly configured

## Troubleshooting

### MongoDB Connection Error
- Verify your connection string
- Check if your IP is whitelisted in MongoDB Atlas
- Ensure credentials are correct

### CORS Error
- Update `CORS_ORIGIN` in `.env` to match your frontend URL
- Make sure both servers are running

### Port Already in Use
- Change `PORT` in `.env` to a different port
- Or kill the process using the port
