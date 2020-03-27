import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'scb',
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
      },
      scbAccount: {
        type: DataTypes.STRING,
        field: 'scb_account',
        unique: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'users',
        },
        unique: true,
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
    },
    {
      underscored: true,
    },
  )
