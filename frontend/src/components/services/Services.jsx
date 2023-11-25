import React from 'react'
import {services} from './../../assets/data/services'
import ServiceCard from './ServiceCard'



const Services = () => {
  // console.log(services)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {services.map((service,index) =>(
       <ServiceCard service={service} key={index} index={index}/>
      ))}
    </div>
  )
}

export default Services