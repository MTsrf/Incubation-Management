import express from 'express'
const router = express.Router()
import { addslot, adminLogin, allApplications, allApproveApplication, allSlots, approveApplications, declinedApplications, pendingApplication, slotBooking } from '../Controller/adminController.js'
import { verifyAdmin } from '../middleware/verifyToken.js'

//login admin
router.post('/login', adminLogin)

//add slots 
router.post('/addslot', addslot)
//pending applications
router.put('/pending', verifyAdmin, pendingApplication)

//approve applications
router.put('/approve', verifyAdmin, approveApplications)

//declined application
router.patch('/declined', verifyAdmin, declinedApplications)

//approve application get
router.get('/allApprove', verifyAdmin, allApproveApplication)


//book slot
router.patch('/bookSlot', verifyAdmin, slotBooking)

//all applications
router.get('/allApplications', verifyAdmin, allApplications)

// all slot push
router.get("/slotset", verifyAdmin, allSlots)
export default router