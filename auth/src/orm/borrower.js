import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'borrower',
    {
      borrowerId: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        field: 'username'
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
    },
  )