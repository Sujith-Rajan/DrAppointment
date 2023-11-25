import React, { useState,useContext } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { BASE_URL } from '../../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'
import { authContext } from '../../context/authContext'





const Login = () => {
  const[formData,setFormData] = useState({
    email:'',
    password:'',
  })
  const navigate = useNavigate()
  const {dispatch} = useContext(authContext)
  const[loading,setLoading] = useState(false)

  const handleInputChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value

    })
  }

  const submitHandler = async (e) =>{
   
    e.preventDefault()
    setLoading(true)
    try{
          const res = await fetch(`${BASE_URL}/auth/login`,{
            method:'post',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
          })
          const result = await res.json()
       
          if(!res.ok){
            throw new Error(result.message)
          }

          dispatch({
            type:'LOGIN_SUCCESS',
            payload:{
              user:result.data,
              token:result.token,
              role:result.role,
            }
          })

          // console.log("login details ",result)


          setLoading(false)
          toast.success(result.message)
        
            navigate('/home')
        
         
          
    }
    catch(err){
      toast.error(err.message)
      setLoading(false)
    }
    
    
  }

  return (
    <section className='px-5 lg:px-0'>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 text-center'>
          Hello! <span className='text-blue-500'> Welcome </span> Back</h3>
          <form onSubmit={submitHandler}
          className='py-4 md:py-0'>
            <div className="mb-5">
              <input type="email" 
              placeholder='Email'
               name='email' 
               value={formData.email} 
               onChange={handleInputChange}
               className='w-full px-4 py-3 border-b border-solid
               border-orange-300 focus:outline-none focus:border-orange-500 
               text-[16px] leading-7 text-headingColor
               placeholder:text-slate-400' />
            </div>
            <div className="mb-5">
              <input type="password" 
              placeholder='Password' 
              name='password' value={formData.password} 
              onChange={handleInputChange}
              className='w-full px-4 py-3 border-b border-solid
               border-orange-300 focus:outline-none focus:border-orange-500 text-[16px] leading-7 text-headingColor
               placeholder:text-slate-400'/>
            </div>

            <div className="mt-7">
              <button className='w-full text-[22px] leading-[30px] text-white rounded-lg px-4 py-3 bg-[#0035b9]'>  
              {loading ? <HashLoader    
                         size={35}
                        color="#fff"
                        />
                       
                         :'Login'}</button>
            </div>

            <p className='mt-5 text-textColor text-center'>
              Don't have an account? <Link to='/signup' className='text-slate-400 font-medium ml-1'>Register</Link>
              </p>

          </form>

      </div>
    </section>
  )
}

export default Login