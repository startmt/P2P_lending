import Sequelize from 'sequelize'
import env from './config'
import User from './orm/user'
import Scb from './orm/scb'
import Information from './orm/information'
import Bank from './orm/bank'
import Request from './orm/request'
import Config from './orm/config'
import RequestUser from './orm/request_user'
import PaymentDate from './orm/payment_date'
import Contract from './orm/contract'
import File from './orm/file'
import Admin from './orm/admin'
import RequestAdmin from './orm/request_admin'
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
  const adminModel = Admin(sequelize)
  const requestAdminModel = RequestAdmin(sequelize)
  const userModel = User(sequelize)
  const ScbModel = Scb(sequelize)
  const InformationModel = Information(sequelize)
  const BankModel = Bank(sequelize)
  const RequestModel = Request(sequelize)
  const ConfigModel = Config(sequelize)
  const RequestUserModel = RequestUser(sequelize)

  paymentDateModel.belongsTo(contractModel)
  // contractModel.hasMany(paymentDateModel)
  contractModel.belongsTo(RequestModel)
  // RequestModel.hasMany(contractModel)
  fileModel.belongsTo(RequestModel)
  RequestModel.hasMany(fileModel)
  // requestAdminModel.hasMany(adminModel)
  requestAdminModel.belongsTo(RequestModel)
  // RequestModel.hasMany(requestAdminModel)
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
  db.config = ConfigModel
  db.paymentDate = paymentDateModel
  db.contract = contractModel
  db.file = fileModel
  db.admin = adminModel
  db.requestAdmin = requestAdminModel
  db.bank = BankModel
  db.sequelize.sync()
}
export default db
