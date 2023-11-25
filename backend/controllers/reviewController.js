import Review from '../models/ReviewSchema.js'
import Doctor from '../models/DoctorSchema.js'

//GET ALL REVIEWS
export const getAllReview = async (req,res) =>{
    try{
        const review = await Review.find({})
        res.status(200).json({message:'successful',data:review})
    }
    catch(err){
        res.status(404).json({message:'not found'})
    }
}

//CREATE REVIEW
export const createReview = async (req,res) =>{
    
    if(!req.body.doctor) req.body.doctor = req.params.doctorId
    if(!req.body.user) req.body.user = req.userId

    const newReview = new Review(req.body)

    try{
         const savedReview = await newReview.save()
         await Doctor.findByIdAndUpdate(req.body.doctor,{
            $push:{reviews:savedReview._id}
         })  
         res.status(200).json({message:'review submitted',data:savedReview}) 
    }
    catch(err){
        res.status(500).json({message:err.message})
    }

}