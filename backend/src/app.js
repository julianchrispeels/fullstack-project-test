import express from "express";
import cors from "cors";

import router from "./routes/notes.routes.js";
import { CLIENT_URL } from './config/config.env.js';

const app = express();

const corsConfig = {
	origin: CLIENT_URL, // Only allow requests from the client URL
	credentials: true // Allow cookies and credentials
};

// Middlewares
app.use(cors(corsConfig));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
	res.send('API de Notas');
});
app.use('/api/v1', router)
app.get('/*', (req, res) => {
	res.status(404).json({ error: "Ruta no encontrada" });
});

export default app;