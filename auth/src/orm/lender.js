import { Model, DataTypes } from 'sequelize'
class Lender extends Model {}
export default (sequelize) => Lender.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    citizenId: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    modelName: 'lender',
  },
)