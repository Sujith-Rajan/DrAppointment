import React, { useState } from 'react'
import doctorImg from '../../assets/images/doctors (2).jpg'
import starIcon from '../../assets/images/starIcon.png'
import DoctorAbout from './DoctorAbout'
import DoctorsFedback from './DoctorsFedback'
import SlidePanel from './SlidePanel'

const DoctorDatas = () => {

    const [tab,setTab] = useState('feedback')
  return <section>
    <div className="max-w-[1170px] px-5 mx-auto">
     <div className="grid md:grid-cols-3 gap-[50px]">
        <div className='md:col-span-2'>
            <div className="flex items-center gap-5">
                <figure className='max-w-[200px] mx-h-[200px]'>
                    <img src={doctorImg} alt="" className='w-72 rounded-md'/>
                </figure>
             
        <div>
        <span className='bg-[#aac9cb] text-irishBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] 
        leading-4 lg:text-[16px] lg:leading-7 font-semibold '>Surgeon</span>
        <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Dr.Anu Thomas</h3>
        <div className='flex items-center gap-[6px]'>
            <span className='flex items-center gap-[6px] text-[14px] leading-5
            lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                   <img src={starIcon} alt="" className='w-6' />4.8 
            </span>
            <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 text-textColor font-[400]'>(272)</span>
        </div>
        <p className='text_para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptate aspernatur quas unde ducimus sit nam
        </p>
            </div>
        </div>
         <div className="mt-[50px] border-b border-solid border-[#0066ff99]">
            <button onClick={() => setTab('about')}
            className={` ${tab ==='about' ? 'border-b border-solid border-orange-600 ' : ''}py-2 px-5 mr-5 text-[16px]
             leading-7 text-headingColor font-semibold`}>
                About</button>

                <button onClick={() => setTab('feedback')}
                className={` ${tab ==='feedback' ? 'border-b border-solid border-orange-600' : ''} py-2 px-5 mr-5 text-[16px] 
                leading-7 text-headingColor font-semibold`}>
                Feedback</button>
         </div>

            <div className="mt-[50px]">
                {
                    tab === 'about' ? <DoctorAbout/> : ''
                }
                {
                    tab === 'feedback' ? <DoctorsFedback/> : '' 
                }
            </div>
        </div>
        <div>
            <SlidePanel/>
        </div>
     </div>
    </div>
  </section>
}

export default DoctorDatas