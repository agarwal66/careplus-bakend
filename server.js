import app from "./app.js";
import cloudinary from "cloudinary";
import cors from "cors"; // Import CORS middleware
import dotenv from "dotenv"; // Import dotenv to load environment variables

// Load environment variables from config.env
dotenv.config();

// Configure CORS
const allowedOrigins = process.env.FRONTEND_URL.split(",");
app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow cookies and Authorization headers
  })
);

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
