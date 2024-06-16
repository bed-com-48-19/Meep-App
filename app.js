const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const classRoutes = require("./routes/classRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const topicRoutes = require("./routes/topicRoutes");
const subtopicRoutes = require("./routes/subtopicRoutes");
const notesRoutes = require("./routes/notesRoutes");
const videoRoutes = require("./routes/videoRoutes");
const quizRoutes = require("./routes/quizRoutes");
const contentCreatorRoutes = require("./routes/contentCreatorRoutes");
const literacyRoutes = require("./routes/literacyRoutes");
const studentQuizRoutes = require("./routes/studentQuizRoutes");
const studentRoutes = require("./routes/studentRoutes");
const studentResponseRoutes = require("./routes/studentResponseRoutes");
const subtopicIntroNotesRoutes = require("./routes/subtopicIntroNotesRoutes");
const testPerformanceRoutes = require("./routes/testPerfomanceRoutes");
const testQuestionGradeRoutes = require("./routes/testQuestionGradeRoutes");
const testQuestionRoutes = require("./routes/testQuestionSchemaRoutes");
const testRoutes = require("./routes/testRoutes");

const tutorContactRoutes = require("./routes/contactsRoutes");
const customerFeedbackRoutes = require("./routes/customerFeedbackRoutes");
const tutorRoutes = require("./routes/tutorRoutes");
const tutorSubjectsRoutes = require("./routes/tutorSubjectsRoutes");

const notesCommentsRoutes = require("./routes/notesCommentRoutes");
const videoCommentRoutes = require("./routes/videoCommentRoutes");
const progressRoutes = require("./routes/progressRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

dotenv.config();

const corsOption = {
  origin: true,
};

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));

// Swagger documentation
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Meep API",
      version: "1.0.0",
      description: "API documentation for MeepApp application",
    },
    servers: [
      {
        // url: "http://localhost:8000/",
        url: "https://meep-app-api.onrender.com",
        description: "Local server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Adjust the path if your route files are in a different location
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Route definitions
app.use("/api/v1/progress", progressRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/notes/comment", notesCommentsRoutes);
app.use("/api/v1/video/comment", videoCommentRoutes);
app.use("/api/v1/tutor", tutorRoutes);
app.use("/api/v1/tu/subjects", tutorSubjectsRoutes);
app.use("/api/v1/tut/feedback", customerFeedbackRoutes);
app.use("/api/v1/tuto/contacts", tutorContactRoutes);
app.use("/api/v1/creator", contentCreatorRoutes);
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/test_questions", testQuestionRoutes);
app.use("/api/v1/literacy", literacyRoutes);
app.use("/api/v1/student_quiz", studentQuizRoutes);
app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/student_test_response", studentResponseRoutes);
app.use("/api/v1/test_question_mark", testQuestionGradeRoutes);
app.use("/api/v1/test_score", testPerformanceRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/class", classRoutes);
app.use("/api/v1/subject", subjectRoutes);
app.use("/api/v1/topic", topicRoutes);
app.use("/api/v1/subtopics", subtopicRoutes);
app.use("/api/v1/notes", notesRoutes);
app.use("/api/v1/subtopic_into_notes", subtopicIntroNotesRoutes);
app.use("/api/v1/videos", videoRoutes);
app.use("/api/v1/quizzes", quizRoutes);

app.get("/", (req, res) => {
  res.send("App is now working");
});

// Database connection
mongoose.set("strictQuery", false);

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection is successful");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

const port = 8000;

app.listen(port, () => {
  dbConnection();
  console.log("server started listening on port " + port);
});
