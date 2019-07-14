import {
    loginMiddleware,
    signin
} from '../service/signinService'

export default (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let isUserCanSignin = loginMiddleware(username, password)
    if (isUserCanSignin) {
        res.status(200).json({ token: signin(username) })
    }
    else if (!isUserCanSignin){
        res.status(401).json({ error: 'Your ussername or password wrong.'})
    }
    else{
        res.status(400).json({ error: 'Something went wrong.'})
    }
}