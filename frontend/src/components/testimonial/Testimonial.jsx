import React from 'react'
import {Pagination} from "swiper/modules";
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patientAvatar.png'
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
   <div className="mt-[30px] lg:mt-[55px]">
    <Swiper
    modules={[Pagination]}
    spaceBetween={3}
    slidesPerView={1}
    pagination={{clickable:true}}
    breakpoints={{
        640:{
            slidesPerView:1,
            spaceBetween:0,
        },
        768:{
            slidesPerView:2,
            spaceBetween:20,
        },
        1024:{
            slidesPerView:3,
            spaceBetween:30,
        },
    }}
    >
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" className='w-12' />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Sheldon Cooper</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p><q>I have taken medical services from them. They treat so well and they are Providing the best medical services.</q></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" className='w-12' />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Sheldon Cooper</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p><q>I have taken medical services from them. They treat so well and they are Providing the best medical services.</q></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" className='w-12' />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Sheldon Cooper</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p><q>I have taken medical services from them. They treat so well and they are Providing the best medical services.</q></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" className='w-12' />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Sheldon Cooper</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p><q>I have taken medical services from them. They treat so well and they are Providing the best medical services.</q></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" className='w-12' />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Sheldon Cooper</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                            <HiStar className='text-yellow-300 w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p><q>I have taken medical services from them. They treat so well and they are Providing the best medical services.</q></p>
            </div>
        </SwiperSlide>
    </Swiper>

   </div>
  )
}

export default Testimonial