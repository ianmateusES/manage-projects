import Sequelize, { Model } from 'sequelize';

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        owner: Sequelize.STRING,
        team: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Project;
