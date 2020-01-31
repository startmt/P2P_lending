import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'payment',
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
      },
      omiseTransactionId: {
        type: DataTypes.STRING,
        field: 'omise_transaction_id',
      },
      blockChainId: {
        type: DataTypes.STRING,
        field: 'blockchan_id',
      },
      requestId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'requests',
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
