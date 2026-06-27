const allowedOrigins = [
  "http://localhost:5173",
  "http://192.168.1.6:5173",

  // Vercel Domains
  "https://ankit-portfolio-inky.vercel.app",
  "https://ankit-portfolio-66tz6r8wq-ankit4511s-projects.vercel.app",
  "https://ankit-portfolio-git-main-ankit4511s-projects.vercel.app",
];

const corsOptions = {
  origin(origin, callback) {
    // Postman / Mobile Apps
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },

  credentials: true,
};

export default corsOptions;