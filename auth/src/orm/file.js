import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define('file', {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
    },
    fileUrl: {
      type: DataTypes.STRING,
      field: 'file_url',
    },
    requestId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'requests',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    fileDescription: {
      type: DataTypes.STRING,
      field: 'file_description',
    },
  })
