import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define('request_log', {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
    },
    log: {
      type: DataTypes.STRING,
      field: 'log',
      allowNull: false,
    },
    requestId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'requests',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
  })
