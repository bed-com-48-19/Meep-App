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
      title: "Meep Platform API",
      version: "1.0.0",
      description: "API documentation for Meep Platform, an educational enhancement application for Malawi students.",
    },
    servers: [
      {
        url: "https://meep-app-api.onrender.com",
        description: "Production server for Meep Platform",
      },
    ],
    components: {
      schemas: {
        Note: {
          type: "object",
          properties: {
            // noteId: {
            //   type: "integer",
            //   description: "The auto-generated id of the note"
            // },
            title: {
              type: "string",
              description: "The title of the note",
            },
            content: {
              type: "string",
              description: "The content of the note",
            },
            subject: {
              type: "string",
              description: "The subject the note belongs to",
            },
            author: {
              type: "string",
              description: "The author of the note",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "The timestamp when the note was created",
            },
          },
          required: ["title", "content", "subject", "author", "createdAt"],
        },
        Video: {
          type: "object",
          properties: {
            // videoId: {
            //   type: "integer",
            //   description: "The auto-generated id of the video"
            // },
            title: {
              type: "string",
              description: "The title of the video",
            },
            description: {
              type: "string",
              description: "The description of the video",
            },
            url: {
              type: "string",
              description: "The URL of the video",
            },
            subject: {
              type: "string",
              description: "The subject the video belongs to",
            },
            createdBy: {
              type: "string",
              description: "The creator of the video",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "The timestamp when the video was created",
            },
          },
          required: ["title", "description", "url", "subject", "createdBy", "createdAt"],
        },
        Quiz: {
          type: "object",
          properties: {
            // quizId: {
            //   type: "integer",
            //   description: "The auto-generated id of the quiz"
            // },
            name: {
              type: "string",
              description: "The name of the quiz",
            },
            description: {
              type: "string",
              description: "The description of the quiz",
            },
            questions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  questionText: {
                    type: "string",
                    description: "The text of the quiz question",
                  },
                  allowsMultiple: {
                    type: "boolean",
                    description: "Whether the question allows multiple answers",
                  },
                  options: {
                    type: "array",
                    items: {
                      type: "string",
                      description: "Options for the quiz question",
                    },
                  },
                  correctAnswer: {
                    type: "string",
                    description: "The correct answer to the quiz question",
                  },
                },
                required: ["questionText", "allowsMultiple", "options", "correctAnswer"],
              },
            },
            subtopic: {
              type: "string",
              description: "The subtopic associated with the quiz",
            },
          },
          required: ["name", "description", "questions", "subtopic"],
        },
        TestPerformance: {
          type: "object",
          properties: {
            // performanceId: {
            //   type: "integer",
            //   description: "The auto-generated id of the test performance record"
            // },
            studentId: {
              type: "integer",
              description: "The id of the student who took the test",
            },
            testId: {
              type: "integer",
              description: "The id of the test taken by the student",
            },
            score: {
              type: "number",
              description: "The score achieved by the student in the test",
            },
            dateTaken: {
              type: "string",
              format: "date-time",
              description: "The date and time when the test was taken",
            },
          },
          required: ["studentId", "testId", "score", "dateTaken"],
        },
        Feedback: {
          type: "object",
          properties: {
            // feedbackId: {
            //   type: "integer",
            //   description: "The auto-generated id of the feedback"
            // },
            studentId: {
              type: "integer",
              description: "The id of the student providing the feedback",
            },
            content: {
              type: "string",
              description: "The content of the feedback",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "The timestamp when the feedback was provided",
            },
            targetType: {
              type: "string",
              description: "The type of content the feedback is about (note, video, quiz, etc.)",
            },
            targetId: {
              type: "integer",
              description: "The id of the content item the feedback is about",
            },
          },
          required: ["studentId", "content", "createdAt", "targetType", "targetId"],
        },
      },
    },
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
