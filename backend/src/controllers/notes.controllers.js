import Note from '../models/note.js';

const NoteController = {
    async getNotes(req, res) {
        try {
            // Obtenemos todas las notas de la base de datos y las devolvemos en formato JSON al cliente
            // Note.findAll() es un método de Sequelize que busca todas las filas de la tabla de la base de datos
            const notes = await Note.findAll();
            res.json(notes);
        } catch (error) {
            console.error("Error al obtener notas:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    },

    async getNoteById(req, res) {
        const { id } = req.params;
        try {
            // Obtenemos la nota con el ID especificado y la devolvemos en formato JSON al cliente
            // Note.findByPk() es un método de Sequelize que busca una fila en la tabla de la base de datos por su clave primaria
            const note = await Note.findByPk(parseInt(id))
            res.json([note]);
        } catch (error) {
            console.error("Error al obtener nota:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    },

    async createNote(req, res) {
        const { title, content } = req.body;
        try {
            // Creamos una nueva nota en la base de datos con los datos proporcionados por el cliente
            // Note.create() es un método de Sequelize que crea una nueva fila en la tabla de la base de datos
            const newNote = await Note.create({ title, content });
            res.json(newNote);
        } catch (error) {
            console.error("Error al crear nota:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    },

    async updateNote(req, res) {
        const { id } = req.params;
        const { title, content } = req.body;
        try {
            // Actualizamos la nota con el ID especificado en la base de datos con los datos proporcionados por el cliente
            // Note.update() es un método de Sequelize que actualiza una fila de la tabla de la base de datos
            const updatedNote = await Note.update({ title, content }, { where: { id: parseInt(id) } });
            if (updatedNote) {
                res.json({ message: "Nota actualizada correctamente" });
            } else {
                res.status(404).json({ error: "Nota no encontrada" });
            }
        } catch (error) {
            console.error("Error al actualizar nota:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    },

    async deleteNote(req, res) {
        const { id } = req.params;
        try {
            // Eliminamos la nota con el ID especificado de la base de datos
            // Note.destroy() es un método de Sequelize que elimina una fila de la tabla de la base de datos
            const deletedNote = await Note.destroy({ where: { id: parseInt(id) } });
            if (deletedNote) {
                res.sendStatus(204);
            } else {
                res.status(404).json({ error: "Nota no encontrada" });
            }
        } catch (error) {
            console.error("Error al eliminar nota:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    },

    async archiveNote(req, res) {
        const { id } = req.params;
        try {
            // Obtenemos la nota con el ID especificado
            const note = await Note.findByPk(parseInt(id));
            if (note) {
                // Cambiamos el estado de la nota a archivada
                note.isArchived = !note.isArchived;
                await note.save();
                res.json(note.isArchived ? { message: "Nota archivada correctamente" } : { message: "Nota desarchivada correctamente" });
            } else {
                res.status(404).json({ error: "Nota no encontrada" });
            }
        } catch (error) {
            console.error("Error al archivar nota:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
};

export default NoteController;