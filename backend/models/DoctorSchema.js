import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    name:{type:String,required:true},
    phone:{type:Number,required:true},
    photo:{type:String},
    ticketPrice:{type:Number},
    role:{type:String},

    // FIELD FOR DOCTORS ONLY
    specialization:{type:String},
    qualification:{type:Array},
    experience:{type:Array},
    bio:{type:String,maxLength:50},
    about:{type:String,maxLength:50},
    timeSlots:{type:Array},
    reviews:[
        {type:mongoose.Types.ObjectId,ref:"Review"}
    ],
    averageRating:{type:Number,default:0},
    totalRating:{type:Number,default:0},
    isApproved:{type:String,enum:["Pending","Approved","Cancelled"],default:"Pending"}, 
    appointments:[{type:mongoose.Types.ObjectId,ref:"Appointment"}]
});

export default mongoose.model("Doctor",doctorSchema);

        