import { doctors } from "../../assets/data/doctors"
import DoctorDetails from "../../components/doctors/DoctorDetails"
 
const Doctors = () => {
  return <>
  <section className="bg-slate-300">
    <div className="container text-center">
      <h2 className="heading">
        Find a Doctor
      </h2>
      <div className="flex items-center justify-between rounded-md mx-auto mt-[30px] mx-w-[540px] bg-[#7094cb89] w-7/12">
        <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor 
        " placeholder="Doctor name or specialiazation" />
        <button className="btn mt-0 rounded-[0px] rounded-r-md ">Search</button>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {doctors.map((doctor)=>(
        <DoctorDetails doctor={doctor} key={doctor.id} />
      ))}
      </div>
    </div>
  </section>
  </>
}

export default Doctors