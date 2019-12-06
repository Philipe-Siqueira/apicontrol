module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'dockerdb',
  database: 'controldb',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
