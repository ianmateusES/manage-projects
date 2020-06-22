module.exports = {
  dialect: 'postgres',
  local: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'manageProjects',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
