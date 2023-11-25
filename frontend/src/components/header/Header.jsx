import logo from '../../assets/images/logo.png'
import React from 'react'
import {BiMenu} from 'react-icons/bi'
import {Link,NavLink} from 'react-router-dom'
import { useEffect,useRef,useContext } from 'react'
import { authContext } from '../../context/authContext.jsx'


const navLinks = [
  {
    path:"/home",
    display:'Home'
  },
  {
    path:'/doctors',
    display:'Find a doctor'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/contact',
    display:'Contact'
  }
]


const Header = () => {

const headerRef = useRef(null)
const menuRef = useRef(null)
const {user,role,token} = useContext(authContext)
const {dispatch} = useContext(authContext)


useEffect(() => {
  const handleStickyHeader = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (headerRef.current) {
      if (scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    }
  };

  // Attach the event listener
  window.addEventListener('scroll', handleStickyHeader);

  // Cleanup: remove event listener on component unmount
  return () => {
    window.removeEventListener('scroll', handleStickyHeader);
  };
}, []); // Empty dependency 


const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

const handleLogout = () => {
  dispatch({type:'LOGOUT'})
}

  return <header className='header flex items-cente' ref={headerRef} >
    <div className="container">
      <div className="flex items-center justify-between sticky_header">
           {/* =============== logo ============= */}
           <div>
            <img src={logo} alt="logo" className='w-24'/>
           </div>
           {/* ================= menu================ */}
           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((navItem,index)=>(
                <li key={index}>
                  <NavLink to={navItem.path} className={navClass => navClass.isActive 
                  ? "text-irishBlueColor text-[16px] leading-7 font-[600]"
                  : "text-textColor text-[16px] leading-7 font-[500] hover:text-white"}>
                    {navItem.display}</NavLink>
                </li>
                ))
              }

            </ul>
            </div>
            {/* ========================nav right========================= */}
            <div className="flex items-center gap-4">
              <div className= 'hidden'  >
                <Link  to={`${role === 'Doctor' ? '/docotr/profile/me' :'/user/profile/me'}`}>
                  <figure className='w-[35px] h-[35px] rounded-full'>
                    <img src={user?.photo} alt="user-image" className='w-full rounded-full bg-orange-400 object-fit-cover ' />
                  </figure>
                  <h2>{user?.name}</h2>
                </Link>
                </div>
                <div>
                 
               {user ?  
                  <button className='bg-orange-500 w-24 text-white font-[600] h-[30px]
                   flex items-center justify-center rounded-[50px]' onClick={handleLogout} >
                    Logout</button>
             
               : <Link to='/login'>
               <button className='bg-orange-500 w-24 text-white font-[600] h-[30px]
                flex items-center justify-center rounded-[50px]'>Login</button>
             </Link>
               }
              </div>
              <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer text-white '></BiMenu>
              </span>
            </div>
           
      </div>
    </div>

  </header>
}

export default Header