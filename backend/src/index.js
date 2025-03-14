//import app from './app.js';
import "./app.js"
import sequelize from './database/database.js';
//import { PORT } from './config/config.env.js';


async function main() {
	await sequelize.sync({ force: false });
	/*app.listen(PORT, () => {
		console.log(`Servidor corriendo en http://localhost:${PORT}`);
	});*/
}

main();