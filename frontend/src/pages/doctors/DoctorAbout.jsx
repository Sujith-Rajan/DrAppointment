import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return <div>
    <div>
        <h3 className='font-semibold text-headingColor leading-[30px] text-[20px] flex items-center gap-2'>About of
        <span className='text-irishBlueColor font-bold text-[24px] 
        leading-9 '>Dr.Anu Thomas</span>
        </h3>
        <p className='text_para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Cumque itaque maiores fugiat voluptatum ipsum quibusdam tenetur
             dignissimos eos adipisci quisquam quia,
             alias dolores illo aliquam autem blanditiis culpa, fugit corrupti.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Cumque itaque maiores fugiat voluptatum ipsum quibusdam tenetur
             dignissimos eos adipisci quisquam quia,
             alias dolores illo aliquam autem blanditiis culpa, fugit corrupti.
        </p>
    </div>
    <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irishBlueColor text-[15px] leading-6 font-semibold'>
                      {formateDate('1-04-2010')} - {formateDate('1-04-2014')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor '>PHD in Surgeon</p>    
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor '>
                    Lissie Hospital , Kerala.
                    </p>   
            </li>

            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irishBlueColor text-[15px] leading-6 font-semibold'>
                      {formateDate('12-04-2000')} - {formateDate('1-04-2010')} 
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor '>PHD in Surgeon</p>    
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor '>
                    Lissie Hospital , Kerala.
                    </p>   
            </li>
        </ul>
    </div>
    <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className='text-yellow-600 text-[15px] leading-6 font-semibold'>
                    {formateDate("07-05-2015")}- {formateDate("07-05-2020")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor '>Sr. Surgeon</p>  
                <p className='text-[14px] leading-5 font-medium text-textColor '>
                    Lissie Hospital , Kerala.
                    </p>   
            </li>

            <li className="p-4 rounded bg-[#fff9ea]">
                <span className='text-yellow-600 text-[15px] leading-6 font-semibold'>
                    {formateDate("07-05-2015")}- {formateDate("07-05-2020")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor '>Sr. Surgeon</p>  
                <p className='text-[14px] leading-5 font-medium text-textColor '>
                    Lissie Hospital , Kerala.
                    </p>   
            </li>

            
        </ul>
    </div>
  </div>
}

export default DoctorAbout