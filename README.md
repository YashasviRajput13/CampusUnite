<<<<<<< HEAD
# ClubUnite Backend

AI-powered event recommendation platform backend built with Node.js, Express, MongoDB, and JWT authentication.

## 🚀 Features

- **JWT Authentication** - Secure user authentication and authorization
- **MongoDB Atlas** - Cloud database with Mongoose ODM
- **Express REST API** - Clean and organized API structure
- **User Management** - User registration,login, and profile management
- **Event Management** - Full CRUD operations for events
- **Organizer System** - Role-based access control for event organizers
- **Protected Routes** - Middleware for secure API endpoints

## 📁 Project Structure

```
clubunite-backend/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   ├── authController.js  # Authentication logic
│   ├── userController.js  # User management
│   ├── eventController.js # Event management
│   └── testController.js  # Test endpoints
├── middleware/
│   └── auth.js           # JWT authentication middleware
├── models/
│   ├── User.js           # User schema with bcrypt
│   └── Event.js          # Event schema
├── routes/
│   ├── authRoutes.js     # Authentication routes
│   ├── userRoutes.js     # User routes
│   ├── eventRoutes.js    # Event routes
│   └── testRoutes.js     # Test routes
├── .env.example          # Environment variables template
├── .gitignore
├── package.json
├── server.js             # Main server file
└── README.md
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ClubUnite
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/clubunite
JWT_SECRET=your_jwt_secret_key_here
```

5. Start the development server:
```bash
npm run dev
```

Or start the production server:
```bash
npm start
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Test Routes
- `GET /api/test/protected` - Test JWT authentication (Protected)

### Users
- `GET /api/users/profile` - Get user profile (Protected)
- `PUT /api/users/profile` - Update user profile (Protected)
- `PUT /api/users/preferences` - Update user preferences (Protected)
- `GET /api/users/my-events` - Get user's events (organized and attending) (Protected)
- `PUT /api/users/become-organizer` - Upgrade account to organizer role (Protected)

### Events
- `GET /api/events` - Get all events (with filters: category, mode, city)
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create new event (Protected, Organizer only)
- `PUT /api/events/:id` - Update event (Protected, Organizer only)
- `DELETE /api/events/:id` - Delete event (Protected, Organizer only)

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. When you register or login, you'll receive a token that must be included in the `Authorization` header:

```
Authorization: Bearer <your-token>
```

### Quick Start Example

1. **Register a new user:**
```bash
POST /api/auth/register
Body: { "name": "John Doe", "email": "john@example.com", "password": "password123" }
Response: { "_id": "...", "name": "John Doe", "email": "john@example.com", "token": "..." }
```

2. **Login:**
```bash
POST /api/auth/login
Body: { "email": "john@example.com", "password": "password123" }
Response: { "_id": "...", "name": "John Doe", "email": "john@example.com", "token": "..." }
```

3. **Access protected route:**
```bash
GET /api/test/protected
Headers: { "Authorization": "Bearer <your-token>" }
Response: { "success": true, "message": "Protected route accessed successfully!", "user": {...} }
```

## 📝 Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration

## 🤝 Contributing

TODO: Add contribution guidelines

## 📄 License

ISC


=======


**URL**: https://lovable.dev/projects/2f557f6f-08f5-47af-900a-d29812063be1
>>>>>>> a3790d61389a4563d31547ab89deac42d6a93f86
