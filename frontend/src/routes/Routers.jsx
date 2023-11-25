import {Route,Routes} from 'react-router-dom'
import Services from '../pages/services/Services'
import Signup from '../pages/signup/Signup'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import Doctors from '../pages/doctors/Doctors'
import DoctorDatas from '../pages/doctors/DoctorDatas'
import UserAccount from '../dashboard/UserAccount'
import DoctorAccount from '../dashboard/DoctorAccount'
import Protected from './Protected'



const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/doctors' element={<Doctors/>}/>
    <Route path='/doctorsDatas' element={<DoctorDatas/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/user/profile/me' element={<Protected allowedRoles={['Patient']}><UserAccount/></Protected>}/>
    <Route path='/doctor/profile/me' element={<Protected allowedRoles={['Doctor']}><DoctorAccount/></Protected>}/>
  </Routes>
};
export default Routers
  

    
    
    
    