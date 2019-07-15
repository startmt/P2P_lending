import {
    checkUserFromDb,
    signin
} from '../service/signinService'

export default (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let isUserCanSignin = checkUserFromDb(username, password)
    isUserCanSignin.then(data => {
        if (data) {
            res.status(200).json({ token: signin(username) })
        }
        else if (!data) {
            res.status(401).json({ error: 'Your username or password wrong.' })
        }
        else {
            res.status(400).json({ error: 'Something went wrong.' })
        }
    }).catch(e => {
        res.end()
    })

}