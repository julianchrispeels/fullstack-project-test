//import app from './app.js';
import "./app.js"
import sequelize from './database/database.js';
//import { PORT } from './config/config.env.js';


async function main() {
	await sequelize.sync({ force: false });
	/*const PORT = process.env.PORT || 3001;
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/
}

main();
