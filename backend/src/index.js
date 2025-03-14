import app from './app.js';
import {PORT} from './config/config.env.js';

// Server
app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});