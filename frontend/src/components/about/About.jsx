import React from 'react'
import {Link} from 'react-router-dom'
import aboutImg from '../../assets/images/aboutImg.jpg'

const About = () => {
  return <section>
    <div className="container">
      <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
         
          <img src={aboutImg} alt="" className='rounded-3xl w-3/6 '/>
        </div>
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="heading">
            Proud to be one of the nations best.
          </h2>
          <p className='text_para '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
             vero quos blanditiis obcaecati error odio iste dignissimos quod
             eaque assumenda repellat esse voluptatum rerum cumque quae ducimus voluptatibus quibusdam maiores!
          </p>
          <p className='text_para mt-[30px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repellendus nam aliquid quas iste alias
             vel est accusantium! Ipsum quae nam magnam repellendus rem deserunt excepturi saepe dolore obcaecati quo?
          </p>
          <Link to='/'><button className='btn'>Learn More</button></Link>
        </div>
      </div>

    </div>
  </section>
}

export default About