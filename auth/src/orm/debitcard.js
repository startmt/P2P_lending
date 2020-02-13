import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define('debitcard', {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
    },
    cardNumber: {
      type: DataTypes.STRING,
      field: 'card_number',
    },
    cardName: {
      type: DataTypes.STRING,
      field: 'card_name',
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
