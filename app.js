const express = require("express");
const app = express();
// require('../databases/db.js')
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
const classRoutes = require("./routes/classRoutes")
const subjectRoutes = require("./routes/subjectRoutes")
const topicRoutes = require("./routes/topicRoutes")
const subtopicRoutes = require("./routes/subtopicRoutes")
const notesRoutes = require("./routes/notesRoutes")
const videoRoutes = require("./routes/videoRoutes")

dotenv.config();

const corsOption = {
  origin: true
}

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));

//auth route
app.use("/api/v1/auth", authRoutes);
//user route
app.use("/api/v1/user", userRoutes)
// class route
app.use("/api/v1/class", classRoutes)
// subject route
app.use("/api/v1/subject", subjectRoutes)
// topic route
app.use("/api/v1/topic", topicRoutes)
// sub-topic
app.use("/api/v1/subtopics", subtopicRoutes)
// create notes route
app.use("/api/v1/notes", notesRoutes)
// video routes
app.use("/api/v1/videos", videoRoutes)


app.get("/", (req, res) => {
  res.send("App is now working");
});

// database connection
mongoose.set("strictQuery", false);

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connection is successful');
  } catch (error) {
    console.error('Connection error:', error);
  }
};

const port = 8000;

app.listen(port, () => {
  dbConnection()
  console.log("server started listening on port " + port);
});