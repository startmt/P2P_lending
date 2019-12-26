import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'infomation',
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        field: 'firstname'
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'lastname'
      },
      citizenId: {
        type: DataTypes.STRING,
        field: 'citizen_id'
      },
      phoneNumber: {
        type: DataTypes.STRING,
        field: 'phone_number'
      },
      birthDate: {
        type: DataTypes.STRING,
        field: 'birthday'
      },
      address: {
        type: DataTypes.TEXT,
        field: 'address'
      },
      scbId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'scbs',
        },
        unique: true,
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
    }, {
    underscored: true,
  }
  )