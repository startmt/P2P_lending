import db from '../mysql'
export const createBorrowerValidated = async(data, username) => {
    try{
        const addressJSON = JSON.stringify(data.profile.address)
        JSON.parse(JSON.stringify(data))
        const newBorrower = await db.sequelize.transaction(t =>{
        return db.borrower.create({ 
            username: username,
            firstName: data.profile.thaiFirstName,
            lastName: data.profile.thaiLastName,
            birthDate: data.profile.birthDate,
            phoneNumber: data.profile.mobile,
            citizenId: data.profile.citizenID,
            address: addressJSON}, { transaction: t });
      });
      return ({status: 200, data:newBorrower})
    }catch(e){
        return {message: e}
    }
}
