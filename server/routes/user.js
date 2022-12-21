import express from 'express'
const router = express.Router()
import { addCompany, userLogin, userSignup } from '../Controller/userController.js'
import { verifyUser } from '../middleware/verifyToken.js'

//User Registration
router.post('/signup',userSignup)

//user Login
router.post('/login',userLogin)

//user addCompany
router.post('/addIncubation',verifyUser,addCompany)


export default router