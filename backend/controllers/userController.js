import User from "../models/UsersSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js"

export const updateUser = async (req,res) => {
    const id = req.params.id
    try{
        const updatedUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({message:'update success',data:updateUser })
    }
    catch(err){
        res.status(404).json({err})
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const deleteUser = async (req,res) => {
    const id = req.params.id
    try{
        const user = await User.findByIdAndDelete(id)
        res.status(200).json({message:'account deleted' })
    }
    catch(err){
        res.status(404).json({err})
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getSingleUser = async (req,res) => {
    const id = req.params.id
    try{
        const user = await User.findById(id).select("-password")
        if(user){
            res.status(200).json({message:'user found',data:user})
        }
        else{
            res.status(404).json({message:'No user exist with this address'})
        }
       
    }
    catch(err){
        res.status(404).json({err})
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllUser = async (req,res) => {
    
    try{
        const users = await User.find({}).select("-password")
        res.status(200).json({message:'users found',data:users})
    }
    catch(err){
        res.status(404).json({err})
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getUserProfile = async (req,res) => {
    const userId = req.userId
    
    try{
        const user= await User.findById(userId)
        if(!user){
            return res.status(404).json({message:'User not found'})
        }
        const {password,...rest} = user._doc
        res.status(200).json({message:'User found',data:{...rest}})
        
            }
            catch(err){
                res.status(500).json({message:'Inavalid user details'})
            }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getMyAppointments = async (req,res) =>{
    try{
            //step-1 : Retrieve appointments from booking for specific user
            const bookings = await Booking.find({user:req.userId})

            //step-2 : Extarct doctor id from appointment booking
            const doctorIds = bookings.map(el => el.doctor.id)

            //step-3 : Retrieve doctors using doctor id
            const doctors = await Doctor.find({_id:{$in:doctorIds}}).select('-password')
            res.status(200).json({message:'Appointments are getting',data:doctors})
    }
    catch(err){
            res.status(500).json({message:'cannot get appointments details'})
    }
}
       

