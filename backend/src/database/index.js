import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Project from '../app/models/Project';

const models = [Project];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
