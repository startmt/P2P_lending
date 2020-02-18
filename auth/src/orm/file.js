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
    fileDescription: {
      type: DataTypes.ENUM('NCB', 'SA', 'BS', 'COMREG', 'PERSON'),
      field: 'file_description',
    },
  })
