import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

// Configurando CORS
app.use(cors({
   origin: 'http://localhost:3000', // O domínio onde seu frontend está rodando
   methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
   credentials: true, // Habilitar credenciais como cookies
}));

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, '../client/public/upload')
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + file.originalname)
   }
 })
const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
   const file = req.file
   res.status(200).json(file.filename);
});

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
   console.log("listening on port 8800");
});
