import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UsersSchema.js'

export const authenticate = async (req,res,next) => {

        // GET TOKEN FROM HEADERS
        const authToken = req.headers.authorization

        //CHECK TOKEN IS EXIST
        if(!authToken || !authToken.startsWith('Bearer')){
            return res.status(401).json({message:'no token'})
        }

        try{
           
            const token = authToken.split(" ")[1]
            
        //VERIFY TOKEN    
            const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.userId = decode.id 
            req.role = decode.role
            console.log(decode)
         
        //MUST BE CALL THE NEXT FUNCTION    
            next()
        }
        catch(err){
          if(err.name === 'TokenExpiredError'){
            return res.status(401).json({message:'token expired'})
          }
          return res.status(401).json({message:'Invalid token or' +err})
        }

}

export const restrict = roles => async(req,res,next) =>{
    const userId = req.userId

    let user;

    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId)

    if(patient){
        user = patient
    }

    if(doctor){
        user = doctor
    }

    if(!roles.includes(user.role)){
        return res.status(401).json({message:"You are not authorized"})
    }
    next()
}
