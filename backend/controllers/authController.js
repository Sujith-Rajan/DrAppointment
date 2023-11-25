import User from "../models/UsersSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const generateToken = user => {
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,
        {
        expiresIn:'15d',
    }
    )
}


export const signup = async (req,res) => {
    const {name,email,phone,password,role,gender,photo} = req.body
    console.log(req.body)
    try{
            let user = null
            if(role === 'Patient'){
               user =await User.findOne({email})
              
            }
            else if(role === 'Doctor'){
                user =await Doctor.findOne({email})
            }
            if(user){
                return res.status(400).json({message:'user exist'})
               }
           
        //  ====================password hash========================  
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)    
        
        if(role === 'Patient'){
            user = new User({
                name,
                email,
                password:hashPassword,
                phone,
                role,
                gender,
                photo
            })
        }
        if(role === 'Doctor'){
            user = new Doctor({
                name,
                email,
                password:hashPassword,
                phone,
                role,
                gender,
                photo
            })
        }
        if(user){
            await user.save()

        res.status(200).json({message:'User successfully created',success:true})
        }
        else{
            res.status(400).json({message:'Invalid Role'})
        }
        
    }
    catch(err){
        res.status(500).json({message:'internal server error,Try again',success:false})
        console.log(err)
    }

}

export const login = async (req,res) => {
    const{email} = req.body
   
     try{
        let user = null 
        const patient =await User.findOne({email})
        const doctor =await Doctor.findOne({email})

        if(patient){
            user = patient
        }
        if(doctor){
            user = doctor
            
        }

        if(!user){
            return res.status(400).json({message:'invalid email'})
        }
         
        const isPasswordMatch =await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordMatch){
            return res.status(400).json({message:'invalid password'})
        }

    //================================== Get Token===========================
    const token = generateToken(user)

    const{password,role,appointments,...rest} = user._doc
    res.status(200).json({message:'login success',token,data:{...rest},role})


    }
    catch(err){
        res.status(500).json({message:'failed to login'}) 
        console.log(err)
         
    }

}