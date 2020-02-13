import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define('admin', {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      field: 'username',
    },
    password: {
      type: DataTypes.STRING,
      field: 'password',
    },
  })
