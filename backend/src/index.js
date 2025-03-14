import app from './app.js';
import {PORT} from './config/config.env.js';

async function main() {
	console.log('Iniciando servidor...');
	app;
}

main();

/*app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);  // ELIMINAR
});*/