import express from "express";
import cors from "cors";

import router from "./routes/notes.routes.js";
import pool from "./config/db.js";
import {CLIENT_URL} from './config/config.env.js';

const app = express();

// Database connection
pool.connect()
	.then(() => console.log("Conectado a PostgreSQL en Supabase"))
	.catch(err => console.error("Error de conexión:", err));

const corsConfig = {
	origin: CLIENT_URL, // Only allow requests from the client
	methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
	credentials: true // Allow cookies and credentials
};

// Middlewares
app.use(cors(corsConfig));
app.use(express.json());

// Routes
app.use('/home', (req, res) => {
	res.send(CLIENT_URL);
});
app.use('/api/v1', router)
app.get('/*', (req, res) => {
	res.status(404).json({ error: "Ruta no encontrada" });
});

export default app;