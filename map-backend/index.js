const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

const app = express()

const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = "secrettoken"

app.use(express.json())
app.use(cors())
app.use(cookieParser())



mongoose.connect("mongodb://127.0.0.1:27017/user").then(
    () => console.log("DB connected")
)

app.get("/api/dashboard", (req, res) => {
    UserModel.findOne({ email })
        .then(user =>
            res.send(user)
        )
})


app.post("/api/login", (req, res) => {
    const { email, password } = req.body

    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                const passOk = bcrypt.compareSync(password, user.password)
                if (passOk) {
                    jwt.sign({
                        email: user.email,
                        id: user._id,
                    }, jwtSecret, {}, (err, token) => {
                        if (err) throw err;
                        res.cookie('token', token).json(user)
                    })
                } else {
                    res.status(422).json("the password is incorrect")
                }
            } else {
                res.json("No user existed")
            }
        })
})

app.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body

    const oldUser = await UserModel.findOne({ email })

    try {
        const oldUser = await UserModel.findOne({ email })
        if (oldUser) {
            return res.json("User already Exists");
        } else {
            const userDoc = await UserModel.create({
                name,
                email,
                password: bcrypt.hashSync(password, bcryptSalt)
            })
            res.json(userDoc)
        }
    } catch (error) {
        res.status(422).json(error)
    }
})
app.listen(3005, () => {
    console.log("server running")
})