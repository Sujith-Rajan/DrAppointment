import React, { useState } from 'react'
import avatar from '../../assets/images/userAvatar.png'
import { formateDate } from '../../utils/formateDate'
import { BsFillStarFill } from 'react-icons/bs'
import FeedbackForm from './FeedbackForm'

const DoctorsFedback = () => {

    const[showFeedbackForm,setShowFeedbackForm] = useState(false)

  return <div>
     <div className='mb-[50px]'>
        <h3 className='font-semibold text-headingColor leading-[30px] text-[20px] flex items-center gap-2'>All reviews (272) </h3>
        <div className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
                <figure className='w-10 h-10 rounded-full'>
                    <img src={avatar} alt="" />
                </figure>
                <div>
                    <h5 className='text-[16px] leading-6 text-irishBlueColor font-bold'>Arjun Reddy</h5>
                    <p className='text-[14px] leading-6 text-textColor'>{formateDate("2-10-2022")}</p>
                    <p className='text_para mt-3 font-medium text-[15px]'>Good services, highly recomended</p>
                </div>
            </div>
            <div className="flex gap-1">
                {[...Array(5).keys()].map((_,index)=><BsFillStarFill key={index} color='#0067FF'/>)}
            </div>
        </div>
    </div>
         {!showFeedbackForm && (
            <div className="text-center">
            <button className='btn' onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
          </div>
          )}
          {showFeedbackForm && <FeedbackForm/>}
  </div>
}

export default DoctorsFedback