import express from 'express'
import {deleteUser,getSingleUser,getAllUser,updateUser,getUserProfile,getMyAppointments} from '../controllers/userController.js'
import {authenticate,restrict} from '../auth/verifyToken.js'

const router = express.Router()

router.put('/:id',authenticate,restrict(['Patient']),updateUser)
router.delete('/:id',authenticate,restrict(['Patient']),deleteUser)
router.get('/',authenticate,restrict(['Admin']),getAllUser)
router.get('/:id',authenticate,restrict(['Patient']),getSingleUser)
router.get('/profile/me',authenticate,restrict(['Patient']),getUserProfile)
router.get('/appointments/my-appointments',authenticate,restrict(['Patient']),getMyAppointments)


export default router