import UserFetchData from "../../hooks/UserFetchData"
import { BASE_URL } from "../../config"
import Error from "../../components/error/Error"
import Loading from "../../components/loader/Loading"
import DoctorDetails from "../../components/doctors/DoctorDetails"
const MyBookings = () => {

  const {data:appointments,loading,error} = UserFetchData(`${BASE_URL}/user/appointments/my-appointments`)

  return (
  <div>
     {loading && !error && <Loading/>}
     {!loading && error && <Error errMessage={error}/>}
     {!loading && !error &&
      ( <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
          appointments.map((doctor,index) => <DoctorDetails doctor={doctor} key={index}/>)
        }
     </div> 
     )}
     {!loading && !error && appointments.length === 0 && 
     <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-red-500" >
      You did not book any doctor yet !
     </h2> }
  </div>
  )
}

export default MyBookings