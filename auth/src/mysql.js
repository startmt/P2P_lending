import Sequelize from 'sequelize'
import env from './config'
import User from './orm/user'
import Scb from './orm/scb'
import Information from './orm/information'
import Bank from './orm/bank'
import Request from './orm/request'
import RequestUser from './orm/request_user'
import PaymentDate from './orm/payment_date'
import Contract from './orm/contract'
import File from './orm/file'
const db = {}
export const connectMysql = async () => {
  const sequelize = new Sequelize('test', 'root', 'example', {
    host: env.MYSQL_HOST,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  })

  const paymentDateModel = PaymentDate(sequelize)
  const contractModel = Contract(sequelize)
  const fileModel = File(sequelize)
  const userModel = User(sequelize)
  const ScbModel = Scb(sequelize)
  const InformationModel = Information(sequelize)
  const BankModel = Bank(sequelize)
  const RequestModel = Request(sequelize)
  const RequestUserModel = RequestUser(sequelize)

  paymentDateModel.belongsTo(contractModel)
  // contractModel.hasMany(paymentDateModel)
  contractModel.belongsTo(RequestModel)
  // RequestModel.hasMany(contractModel)
  fileModel.belongsTo(RequestModel)
  RequestModel.hasMany(fileModel)
  userModel.hasOne(ScbModel)
  userModel.hasMany(BankModel)
  userModel.hasMany(RequestUserModel)
  RequestModel.hasMany(RequestUserModel)
  ScbModel.belongsTo(userModel)
  ScbModel.hasOne(InformationModel)
  InformationModel.belongsTo(ScbModel)
  BankModel.belongsTo(userModel)

  db.user = userModel
  db.scb = ScbModel
  db.requestuser = RequestUserModel
  db.request = RequestModel
  db.infomation = InformationModel
  db.Sequelize = Sequelize
  db.sequelize = sequelize
  db.paymentDate = paymentDateModel
  db.contract = contractModel
  db.file = fileModel
  db.bank = BankModel
  db.sequelize.sync()
}
export default db
