import Sequelize from 'sequelize';

import { DB_URI } from '../config/config.env.js';

const sequelize = new Sequelize(DB_URI)

export default sequelize;