import { Router } from 'express';

import NoteController from '../controllers/notes.controllers.js';

const router = Router();

// Creamos las rutas de la API
router.get("/notes", NoteController.getNotes);
router.get("/notes/:id", NoteController.getNoteById);
router.post("/notes", NoteController.createNote);
router.put("/notes/:id", NoteController.updateNote);
router.patch("/notes/:id", NoteController.archiveNote);
router.delete("/notes/:id", NoteController.deleteNote);

export default router;