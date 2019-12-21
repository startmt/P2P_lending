import Sequelize  from 'sequelize'
import env from './config'
import Borrower from './orm/borrower'
import Lender from './orm/lender'
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
    db.borrower = Borrower(sequelize)
    db.lender = Lender(sequelize)
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.sequelize.sync()
}
export default db