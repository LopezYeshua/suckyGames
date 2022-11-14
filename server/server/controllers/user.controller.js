const { User } = require('../models/user.model')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email})

    if (user === null) {
        return res.sendStatus(400)
    }

    const correctPassword = await bcrypt.compare(req.body.password, user.password)
    if (!correctPassword) {
        return res.sendStatus(400)
    }

    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY)

    res
        .cookie("usertoken", userToken, process.env.SECRET_KEY, {
            httpOnly: true
        })
        .json({msg: "success!", user: user, userToken: userToken})
}

module.exports.register =  async (req, res) => {
    await User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, 
            process.env.SECRET_KEY,
            { expiresIn: 300 })

            res
                .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                    httpOnly: true
                })
                .json({msg: "success!", user: user, userToken: userToken})
        })
        .catch(err => res.json(err))
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken')
    res.sendStatus(200)
}

module.exports.getAllUsers = (req, res) => {
    User.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
}