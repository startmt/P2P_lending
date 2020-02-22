import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'request_admin',
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.STRING,
        field: 'description',
      },
      requestId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'requests',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      adminId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'admins',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
    },
    {
      underscored: true,
    },
  )
