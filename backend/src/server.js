import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/index.js";
import pool from "./config/db.js";

dotenv.config();

const app = express();

// Database connection
pool.connect()
	.then(() => console.log("Conectado a PostgreSQL en Supabase"))
	.catch(err => console.error("Error de conexión:", err));

const corsConfig = {
	origin: process.env.CLIENT_URL, // Only allow requests from the client
	methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
	credentials: true // Allow cookies and credentials
};

// Middlewares
app.use(cors(corsConfig));
app.use(express.json());

// Routes
app.use('/api/v1', router)

// Server
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});