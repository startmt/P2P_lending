import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'contract',
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
      },
      contractDetailId: {
        type: DataTypes.STRING,
        field: 'contract_detail_id',
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
