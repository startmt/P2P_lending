import Sequelize  from 'sequelize'
import env from './config'
import User from './orm/user'
import Scb from './orm/scb'
import Information from './orm/information'
import DebitCard from './orm/debitcard'
import Request from './orm/request'
import Config from './orm/config'
const db = {}
export const connectMysql = async() => {
    const sequelize = new Sequelize('test', 'root', 'example', {
        host: env.MYSQL_HOST,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          }
      });
    const userModel = User(sequelize)
    const ScbModel = Scb(sequelize)
    const InformationModel = Information(sequelize)
    const DebitCardModel = DebitCard(sequelize)
    const RequestModel = Request(sequelize)
    const ConfigModel = Config(sequelize)

    userModel.hasOne(ScbModel,)
    userModel.hasMany(DebitCardModel)

    // userModel.hasMany(RequestModel)
    // RequestModel.belongsToMany(userModel)

    ScbModel.belongsTo(userModel)
    ScbModel.hasOne(InformationModel)
    InformationModel.belongsTo(ScbModel)
    DebitCardModel.belongsTo(userModel)
    
    db.user = userModel
    db.scb = ScbModel
    db.request = RequestModel
    db.infomation = InformationModel
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.config = ConfigModel
    db.sequelize.sync()
}
export default db