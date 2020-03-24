import { DataTypes } from 'sequelize'
export default (sequelize) =>
  sequelize.define('request', {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
      field: 'category',
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      field: 'title',
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('INIT', 'CHECKED', 'LENDING', 'SUCCESS', 'REJECT'),
      field: 'state',
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      field: 'amount',
      allowNull: false,
    },
    interestRate: {
      type: DataTypes.FLOAT,
      field: 'interest_rate',
      allowNull: false,
    },
    loanTenor: {
      type: DataTypes.FLOAT,
      field: 'loan_tenor',
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      field: 'description',
      allowNull: false,
    },
    log: {
      type: DataTypes.STRING,
      field: 'log',
      allowNull: false,
    },
  })
