import React from 'react'
import FaqList from './FaqList'
import { faqs } from '../../assets/data/faqs'


const Faq = () => {
    
  return (
    <ul className='mt-[38px]'>
        {faqs.map((faq,index)=>(
            <FaqList faq={faq} key={index} index={index}/>
        ))}
    </ul>
  )
}

export default Faq