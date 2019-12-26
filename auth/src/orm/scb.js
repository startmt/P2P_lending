import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'scb',
    {
      scbId: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      scbAccount: {
        type: DataTypes.STRING,
        field: 'scb_account'
      },
    },
  )