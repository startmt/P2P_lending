import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define('debitcard', {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
    },
    bankAccount: {
      type: DataTypes.STRING,
      field: 'bank_account',
    },
    name: {
      type: DataTypes.STRING,
      field: 'name',
    },
    state: {
      type: DataTypes.ENUM('CREATED', 'VERIFIED'),
      field: 'state',
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
  })
