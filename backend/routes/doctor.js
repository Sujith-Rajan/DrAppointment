import express from 'express'
import {deleteDoctor,getSingleDoctor,getAllDoctor,updateDoctor,getDoctorProfile} from '../controllers/doctorController.js'
import {authenticate,restrict} from '../auth/verifyToken.js'

import reviewRoute from './review.js'

const router = express.Router()

//NESTED ROUTE
router.use("/:doctorId/review",reviewRoute)


router.put('/:id',authenticate,restrict(['Doctor']),updateDoctor)
router.delete('/:id',authenticate,restrict(['Doctor']),deleteDoctor)
router.get('/:id',getSingleDoctor)
router.get('/',getAllDoctor)
router.get('/profile/me',authenticate,restrict(['Doctor']),getDoctorProfile)

export default router