# Backend Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Setup MongoDB**
   - Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
   - Create a new cluster
   - Get your connection string

3. **Create .env File**
   ```bash
   cp .env.example .env
   ```

4. **Update .env with your MongoDB URI**
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:5173
   ```

5. **Start Backend Server**
   ```bash
   npm run dev
   ```

Server will be running at `http://localhost:5000`

## API Usage

The contact form will automatically post to `http://localhost:5000/api/contact/submit`

All submissions will be stored in MongoDB and can be viewed at the admin panel (to be created).

## What's Included

- ✅ Express.js server
- ✅ MongoDB integration with Mongoose
- ✅ Contact form submission API
- ✅ CORS enabled
- ✅ Error handling
- ✅ Input validation
- ✅ Admin endpoints to view/manage submissions
