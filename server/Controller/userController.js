import Applications from "../model/Applications.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js'
import mongoose from "mongoose"




// jwt process


const maxAge = 3 * 24 * 60 * 60;

const createToken = (data) => {
    console.log(data);
    console.log(process.env.JWT_KEY);
    return jwt.sign({data},process.env.JWT_KEY, { expiresIn: maxAge });
}



export const userSignup = (async (req, res, next) => {
    try {
        console.log(req.body);
        let user = await Applications.findOne({ email: req.body.email })
        if (!user) {
            const passwordHash = await bcrypt.hash(req.body.password, 10)
            const data = await Applications.create({
                isAdmin: false,
                name: req.body.name,
                phone_number: req.body.phone_number,
                email: req.body.email,
                password: passwordHash,
                isDeleted: false,
            })

            const token = createToken(data._id);
            console.log("=============");
            console.log(token);
            
            // const { password, isAdmin, ...otherDetails } = data._doc
            res.status(200).json({ created: true, details: data,jwt:token})
        } else {
            res.json({ err: true, created: false })
        }
    } catch (err) {
        res.json({ err: true, message: err, created: false })
    }
})


export const userLogin = (async (req, res, next) => {
    try {
        console.log(req.body);
        let user = await Applications.findOne({ email: req.body.email })
        if (!user) return next(createError(404, 'User  not exist !..'))
        if (!user.isAdmin) {
            let isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
            const { password, isAdmin, ...otherDetails } = user._doc
            const token = createToken(user._id)
            console.log("=============");
            console.log(token);


            if (isPasswordCorrect && !isAdmin) {
                res.status(200).json({ created: true, details: otherDetails,jwt:token })
            } else {
                const err = createError(400, 'Password is incorrect');
                res.json({ err: err, created: false })
            }
        }else{
            res.json({err:true})
        }
    } catch (error) {
        next(error)
    }
})


export const addCompany = (async (req, res, next) => {
    try {
        const {data} = req.body
        let createObj = {
            application:true,
            name: data.name,
            address: data.address,
            city: data.city,
            state: data.state,
            email: data.email,
            phoneNumber: data.phoneNumber,
            companyName: data.companyName,
            background: data.background,
            products: data.products,
            solve: data.solve,
            solution: data.solution,
            customer: data.customer,
            advantage: data.advantage,
            revenue: data.revenue,
            marketsize: data.marketsize,
            marketservice: data.marketservice,
            incubation: data.incubation,
            marketplan: data.marketplan,
            status:"new",
            slot:null,
            track:false,
            pending:true,
            approve:false,
            decline:false,
            approveStatus:false,
            buttonCheck:false,
        }

        let check = await Applications.findOne({_id:mongoose.Types.ObjectId(req.user.data),"application.application":true})
        if (!check) {
            let userData = await Applications.updateOne({_id:mongoose.Types.ObjectId(req.user.data)},{
                $set:{
                    application:createObj
                }
            })
            console.log(userData);
            res.status(200).json({updated:true})
        }else{
            res.json("already registerd")
        }
        
    } catch (error) {

    }
})