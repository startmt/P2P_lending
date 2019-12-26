import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define(
    'request',
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
      },
      category: {
        type: DataTypes.STRING,
        field: 'category'
      },
      title: {
        type: DataTypes.STRING,
        field: 'title'
      },
      state: {
        type: DataTypes.ENUM('INIT', 'STAFF', 'CHECKED', 'LENDING', 'SUCCESS', 'REJECT'),
        field: 'state'
      },
      amount: {
        type: DataTypes.INTEGER,
        field: 'amount'
      },
      interestRate: {
        type: DataTypes.INTEGER,
        field: 'interest_rate'
      },
      loanTenor: {
        type: DataTypes.INTEGER,
        field: 'loan_tenor'
      },
      description: {
        type: DataTypes.INTEGER,
        field: 'description'
      },
    },
  )