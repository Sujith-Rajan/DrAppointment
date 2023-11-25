import React, { useContext,useState } from 'react'
import { authContext } from '../context/authContext'
import { BASE_URL } from '../config'

import MyBookings from './booking/MyBookings'
import ProfileSettings from './booking/ProfileSettings'
import userFetchData from '../hooks/UserFetchData'
import Loading from '../components/loader/Loading'
import Error from '../components/error/Error'






const UserAccount = () => {

    const [tab,setTab] = useState('bookings')
    const{dispatch} = useContext(authContext)
   
   
    const{data:userData,loading,error} = userFetchData(`${BASE_URL}/user/profile/me`)
    // console.log(userData,'user data')

    const handleLogout = () => {
        dispatch({type:'LOGOUT'})
    }

    return (
        <section>
            <div className='max-w-[1170px] px-5 mx-auto'>
                {
                    loading && !error && <Loading/>
                }
                {
                    error && !loading && <Error errMessage={error}/>
                }

             {
                !loading && !error &&    <div className='grid md:grid-cols-3 gap-10 '>
                <div className='pb-[50px] px-[30px] rounded-md  mt-5'>
                        
                    <div className="flex items-center justify-center">
                        <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-orange-400 '>
                            <img src={userData.photo} alt="" className='w-full h-full rounded-full' />
                        </figure>
                    </div>
                            
                   <div className='text-center mt-4'>
                        <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>
                            {userData.name}</h3>
                        <p className='text-textColor text-[15px] leading-6 font-medium '>
                            {userData.email}</p>
                        <p className='text-textColor text-[15px] leading-6 font-medium'>
                            Blood Group: 
                            <span  className='ml-2 text-headingColor text-[22px] leading-8'>
                           {userData.bloodType}</span> </p>      
                   </div>
                         <div className='mt-[50px] md:mt-[100px]'>
                            <button className='w-full bg-blue-500 p-3 text-[16px] leading-7 rounded-full text-white' onClick={handleLogout}>
                                Logout</button>
                            <button className='w-full bg-red-500 mt-4 p-3 text-[16px] leading-7 rounded-full text-white'>
                                Delete Account</button>    
                         </div>       
                </div>
      
                <div className='md:col-span-2 md:px-[30px]'>
                  <div className=' mt-5'>
                      <button className={`${tab==='bookings' && "bg-orange-400 text-white font-medium"}
                      p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16-px]
                      leading-7 border border-solid border-orange-400`}  onClick={()=>setTab('bookings')}>
                          My Bookings</button>
                      <button className={`${tab==='settings' && "bg-orange-400 text-white font-medium"}
                      p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16-px]
                      leading-7 border border-solid border-orange-400`} onClick={()=>setTab('settings')}>
                          Profile Settings</button>    
                  </div>
                  {tab==='bookings' && <MyBookings/>}
                {tab==='settings' && <ProfileSettings userData={userData}/>}
                </div>
               
            </div>
             }   
  
           </div>
        </section>
    )
    
  }
  
  export default UserAccount

  
    
