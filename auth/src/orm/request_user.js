import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'request_user',
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
      },
      requestId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'requests',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
    },
    {
      underscored: true,
    },
  )
