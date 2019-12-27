import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        field: 'username'
      },
      password: {
        type: DataTypes.STRING,
        field: 'password'
      },
      identify: {
        type: DataTypes.BOOLEAN,
        field: 'identify'
      },
      role: {
        type: DataTypes.STRING,
        field: 'role'
      },
      state: {
        type: DataTypes.ENUM('NORMAL', 'BLACKLIST', 'WARN', 'DANGER')
      }
    },
  )