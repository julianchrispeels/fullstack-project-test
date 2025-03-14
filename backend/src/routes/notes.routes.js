import { Router } from 'express';
import dotenv from 'dotenv';

import NoteController from '../controllers/notes.controllers.js';

dotenv.config();

const router = Router();

// Creamos las rutas de la API
router.get("/notes", NoteController.getNotes);

router.get("/notes/:id", NoteController.getNoteById);

export default router;