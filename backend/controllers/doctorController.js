import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

export const updateDoctor = async (req,res) => {
    const id = req.params.id
    try{
        const updatedDoctor = await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({message:'update success',data:updatedDoctor })
    }
    catch(err){
        res.status(404).json({err})
    }
}

export const deleteDoctor = async (req,res) => {
    const id = req.params.id
    try{
        const doctor = await Doctor.findByIdAndDelete(id)
        res.status(200).json({message:'account deleted' })
    }
    catch(err){
        res.status(404).json({err})
    }
}

export const getSingleDoctor = async (req,res) => {
    const id = req.params.id
    try{
        const doctor = await Doctor.findById(id)
        .populate("reviews")
        .select("-password")
        res.status(200).json({message:'Doctor found',data:doctor})
    }
    catch(err){
        res.status(404).json({err})
    }
}

export const getAllDoctor = async (req,res) => {
    
    try{
         const {query} = req.query
         let doctors;
         if(query){
            doctors = await Doctor.find({isApproved:'Approved',$or:[
                {name:{$regex:query,$options:"i"}},
                {specialization:{$regex:query,$options:"i"}}
            ]
        }).select("-password")
        res.status(200).json({message:'Doctors found',data:doctors})
         }
         else{
            doctors = await Doctor.find({isApproved:'Approved'}).select("-password")
            res.status(200).json({message:'Doctors found',data:doctors})
         }

       
        
    }
    catch(err){
        res.status(404).json({err})
    }
}

export const getDoctorProfile = async(req,res) =>{
    const doctorId = req.userId
    try{
        const doctor = await Doctor.findById(doctorId)
        if(!doctor){
            return res.status(404).json({message:'No result found'})
        }
        const {password,...rest} = doctor._doc
        const appointment = await Booking.find({doctor:doctorId})
        res.status(200).json({message:'docotr details found',data:{...rest,appointment}})
    }
    catch(err){
        res.status(500).json({message:'invalid details'})
    }
}

