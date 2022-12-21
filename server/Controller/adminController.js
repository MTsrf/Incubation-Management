import Applications from "../model/Applications.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createError } from "../utils/error.js";
import mongoose from "mongoose";


//jwt verification
const maxAge = 3 * 24 * 60 * 60;
const createToken = (data) => {
    return jwt.sign({ data }, process.env.JWT_KEY, { expiresIn: maxAge });
}




export const adminLogin = (async (req, res, next) => {
    try {
        let user = await Applications.findOne({ email: req.body.email })
        if (!user) return next(createError(404, 'User  not exist !..'))
        if (user.isAdmin) {
            let isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
            const { password, ...otherDetails } = user._doc
            const token = createToken(user._id)
            console.log(token);
            console.log("token addndskfjsldkfsdklfjsd");
            if (isPasswordCorrect && user.isAdmin) {
                console.log("=======================");
                res.status(200).json({ created: true, details: otherDetails, jwt: token })
            } else {
                const err = createError(400, 'Password is incorrect');
                res.json({ err: err, created: false })
            }
        } else {
            const err = createError(400, 'User is incorrect');
            res.json({ err: err, created: false })
        }

    } catch (error) {
        next(error)
    }
})


export const addslot = (async (req, res, next) => {
    try {
        const slots = []
        for (let i = 1; i <= 50; i++) {
            slots.push({
                Slot: `A${i}`,
                isBooked: false
            })

        }
        const admin = await Applications.findOne({ isAdmin: true })
        admin.bookingSlot = slots
        await admin.save()
    } catch (error) {

    }
})

//Pending Request
export const pendingApplication = (async (req, res, next) => {
    try {
        console.log("data");
        console.log(req.body._id);
        const approve = await Applications.findByIdAndUpdate(req.body._id, {
            $set: {
                'application.pending': false, 'application.approve': true, 'application.buttonCheck': true, 'application.status': "pending"
            }
        })
        res.json({ updated: true })
    } catch (error) {

    }
})


export const approveApplications = (async (req, res, next) => {
    try {
        console.log(req.body);
        let approve = await Applications.findByIdAndUpdate(req.body._id, {
            $set: {
                'application.track': true, 'application.buttonCheck': false, 'application.approveStatus': true, 'application.status': "approved"
            }
        })
        console.log(approve);
        res.json({ updated: true })
    } catch (error) {

    }
})

export const declinedApplications = (async (req, res, next) => {
    try {
        let decline = await Applications.findByIdAndUpdate(req.body._id, {
            $set: {
                'application.decline': true, 'application.approveStatus': false, 'application.status': "declined"
            }
        })
        res.json({ updated: true })
    } catch (error) {

    }
})


//get all track aplication coz slot booking application
export const allApproveApplication = (async (req, res, next) => {
    try {
        let allApprove = await Applications.find({ "application.track": true })
        res.status(200).json(allApprove);
    } catch (error) {

    }
})


//get all application
export const allApplications = (async (req, res, next) => {
    try {
        const allApplications = await Applications.find({ "application.application": true })
        res.status(200).json(allApplications)

    } catch (error) {

    }
})

//set slot using put method
export const slotBooking = (async (req, res, next) => {
    try {
        const slotBook = await Applications.updateOne({ 'bookingSlot._id': mongoose.Types.ObjectId(req.body.slotData._id) }, {
            $set: {
                'bookingSlot.$.isBooked': true, 'bookingSlot.$.ApplicationId': mongoose.Types.ObjectId(req.body.company)
            }
        })
        const apply = await Applications.findByIdAndUpdate(req.body.company, {
            $set: {
                'application.slot': req.body.slotData.Slot, 'application.track': false
            }
        })
        res.status(200).json({ updated: true })
    } catch (error) {

    }
})



//get Slots array in admin
export const allSlots = (async (req, res, next) => {
    try {
        const slotAll = await Applications.aggregate([{
            $match: {
                isAdmin: true
            }
        }])
        const slot = slotAll[0].bookingSlot
        res.status(200).json(slot)
    } catch (error) {

    }
})