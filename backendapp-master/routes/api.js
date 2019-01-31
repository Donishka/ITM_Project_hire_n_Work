const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Client = require('../models/client')
const Employee = require('../models/employee')
const Invoice = require('../models/invoice')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const db = "mongodb://Delta:123456a@ds163054.mlab.com:63054/work_and_hire"

mongoose.connect(db, err => {
    if (err) {
        console.error('error ' + err)
    }
    else {
        console.log('Connected to DB')
    }
})

router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        }
        else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/employeeRegister', (req, res) => {
    let userData = req.body
    console.log(userData);
    let user = new Employee(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        }
        else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/createInvoice', (req, res) => {
    let invoiceData = req.body
    console.log("In backend "+JSON.stringify(invoiceData));
    let invoice = new Invoice(invoiceData)
    invoice.save((error, registeredInvoice) => {
        if (error) {
            console.log(error)
        }
        else {
            res.status(200).send(registeredInvoice)
        }
    })
})

router.post('/clientRegister', (req, res) => {
    let userData = req.body
    console.log(userData);
    let user = new Client(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        }
        else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error)
        }
        else {
            if (!user) {
                res.status(401).send('Email Invalid')
            }
            else {
                if (user.password !== userData.password) {
                    res.status(401).send('Not the Password')
                }
                else {
                    // res.status(200).send(user)
                    res.status(200).json({
                        "token": jwt.sign({ _id: user._id },
                            "SECRET#123",
                            {
                                expiresIn: "20m"
                            })
                    });
                }
            }

        }
    })
})



router.post('/userprofile', (req, res) => {
    // let userData=req.
    // console.log(req.body.token)
    let userId
    jwt.verify(req.body.token, "SECRET#123",
        (err, decoded) => {
            if (err)
                return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
            else {
                userId = decoded._id;
                // next();
            }
        })


    User.findOne({ _id: userId }, (error, user) => {
        if (error) {
            console.log(error)
        }
        else {
            if (!user) {
                res.status(401).send('Email Invalid')
            }

            else {
                // res.status(200).send(user)
                // res.status(401).send('Email Invalid')
                res.status(200).json({ status: true, user })
            }
        }

    })
});

module.exports = router