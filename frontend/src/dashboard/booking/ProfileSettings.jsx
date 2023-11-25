import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL } from "../../config";
import HashLoader from 'react-spinners/HashLoader'
import {toast} from 'react-toastify'
import { token } from '../../config';


const UserProfile = ({userData}) => {
  
  const navigate = useNavigate()
  const[selectedFile,setSelectedFile] = useState(null)
  
  const[loading,setLoading] = useState(false)
  const[formData,setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    password:'',
    bloodType:'',
    gender:'Male',
    photo:null,
   
   
  })
  
  useEffect(()=>{
    setFormData({name:userData.name,email:userData.email,phone:userData.phone,photo:userData.photo,
      gender:userData.gender,bloodType:userData.bloodType})
  },[userData])

  const handleInputChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value

    })
   
  }

  const handleFileInputChange = async (e)=>{
    const file = e.target.files[0]
    const data = await uploadImageToCloudinary(file)
    
    setSelectedFile(data.url)
    setFormData({...formData,photo:data.url})
  }

  const submitHandler = async (e) =>{
   
    e.preventDefault()
    setLoading(true)
    try{
          const res = await fetch(`${BASE_URL}/user/${userData._id}`,{
            method:'put',
            headers:{
              'Content-Type':'application/json',
              Authorization : `Bearer ${token}`
            },
            body: JSON.stringify(formData)
          })
          const {message} = await res.json()
          if(!res.ok){
            throw new Error(message)
          }
          setLoading(false)
          toast.success(message)
          setTimeout(()=>{
            navigate('/user/profile/me')
          },4000)
         
          
    }
    catch(err){
      toast.error(err.message)
      setLoading(false)
    }
    
  }

    return (
        <section className="px-5 xl:px-0">
            <div className="max-w-[1170px] mx-auto">
                <div className="grid grid-cols-1  ">
                   
                    {/* ===================== update form================= */}
                    <div className="rounded-l-lg lg:pl-16 py-0 ">
                      
                        <form onSubmit={submitHandler}>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-b border-solid
                                    border-orange-300 focus:outline-none focus:border-orange-500 
                                    text-[16px] leading-7 text-headingColor
                                    placeholder:text-slate-400"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-b border-solid
                                    border-orange-300 focus:outline-none focus:border-orange-500 
                                    text-[16px] leading-7 text-headingColor
                                    placeholder:text-slate-400"
                                    
                                />
                            </div>

                            <div className="mb-2">
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-b border-solid
                                    border-orange-300 focus:outline-none focus:border-orange-500 
                                    text-[16px] leading-7 text-headingColor
                                    placeholder:text-slate-400"
                                   
                                />
                            </div>

                            <div className="mb-2">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-b border-solid
                                    border-orange-300 focus:outline-none focus:border-orange-500 
                                    text-[16px] leading-7 text-headingColor
                                    placeholder:text-slate-400"
                                   
                                    
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    placeholder="Blood group"
                                    name="bloodType"
                                    value={formData.bloodType}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border-b border-solid
                                    border-orange-300 focus:outline-none focus:border-orange-500 
                                    text-[16px] leading-7 text-headingColor
                                    placeholder:text-slate-400"
                                />
                            </div>
                            <div className="mb-2 flex items-center justify-between ">
                            

                              <label htmlFor="" className="text-headingColor font-bold text-[16px] leading-7 ">
                                Gender:
                                <select name="gender" id="gender" 
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="text-textColor font-semibold text-[15px] leading-7 px-4
                                py-3 focus:outline-none">
                                   
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                              </label>
                            </div>

                            <div className="mb-2 flex items-center gap-3 ">
                            {formData.photo &&  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid
                              border-orange-500 flex items-center justify-center ">
                                <img src={formData.photo} alt="" className="rounded-full" />
                              </figure> }
                        <div className="relative w-[120px] h-[50px] "> 
                            <input type="file"
                             name="photo" 
                             id="customFile" 
                             onChange={handleFileInputChange}
                             accept=".jpg,.png"
                             className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"  />
                            <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex
                            items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden 
                            bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer">
                              
                              {selectedFile ? selectedFile.name : 'Upload Photo'}
                            </label>
                        </div>   
                            </div>

                            <div className="mt-7">
              <button 
              disabled={loading && true}  
              type="submit" 
              className='min-w-full  text-[22px] leading-[30px] text-white rounded-lg px-4 py-3 bg-blue-600'>
               {loading ? <HashLoader    
                         size={35}
                        color="#fff"
                        />
                       
                         :'Update'} 
                </button>
            </div>

            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile