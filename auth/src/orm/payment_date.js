import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'infomation',
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
      },
      number: {
        type: DataTypes.NUMBER,
        field: 'number',
      },
      date: {
        type: DataTypes.DATE,
        field: 'date',
      },
      amount: {
        type: DataTypes.NUMBER,
        field: 'amount',
      },
      contractId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'contracts',
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
