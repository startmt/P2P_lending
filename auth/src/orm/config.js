import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'config',
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      interest: {
        type: DataTypes.INTEGER,
        field: 'interest'
      },
      category: {
        type: DataTypes.STRING,
        field: 'category'
      },
    }, {
    underscored: true,
  }
  )