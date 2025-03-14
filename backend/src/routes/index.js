import { Router } from 'express';
import dotenv from 'dotenv';

import pool from '../config/db.js';

dotenv.config();

const router = Router();

// Creamos las rutas de la API
router.get("/notes", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM notes");
        res.json(result.rows);
    } catch (error) {
        console.error("Error al obtener notas:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

router.get("/notes/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM notes WHERE id = $1", [id]);
        res.json(result.rows);
    } catch (error) {
        console.error("Error al obtener nota:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

export default router;