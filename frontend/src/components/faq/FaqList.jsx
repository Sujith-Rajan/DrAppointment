import React,{useState} from 'react'
import {AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";

const FaqList = ({faq,index}) => {
   const {question,content} = faq
   const [isOpen, setIsOpen] = useState(false)
   
   const toggleAccordion = () =>{
       setIsOpen(!isOpen)
    }
    
      
    return (
     <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-slate-300 mb-5 cursor-pointer '>
          <div className="flex items-center justify-between gap-5" onClick={toggleAccordion}>
              <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
                  {question}
              </h4>
              <div className={`${isOpen && "bg-orange-400 text-white border-none rounded" } 
              w-7 h-7 lg:w-8 lg:h-8 border border-solid border-textColor rounded flex 
              items-center justify-center`}>
                   {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
          </div>
          {isOpen && <div className='mt-4'>
              <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                  {content}
              </p>
              </div>}
  
     </div>
    )
  }
  
  export default FaqList
    
  
