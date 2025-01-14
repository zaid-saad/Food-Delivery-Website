import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setshowLogin}) => {

    const [menu, setmenu] = useState("Home")
    const {gettotalcartamount , setToken , token} = useContext(StoreContext)
    const navigate  = useNavigate()
    const logout = ()=>{
        localStorage.removeItem("token")
        setToken("");
        navigate("/")
    }


  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setmenu("Home")} className={menu==='Home'?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setmenu("Menu")} className={menu==='Menu'?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setmenu("Mobile App")} className={menu==='Mobile App'?"active":""}>Mobile App</a>
            <a href='#footer' onClick={()=>setmenu("Contact Us")} className={menu==='Contact Us'?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={gettotalcartamount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setshowLogin(true)}>Sign In</button>:
                <div className='navbar-profile'>
                    <img src={assets.profile_icon} alt="" />
                    <ul className='navbar-profile-dropdown'>
                        <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    
                    </ul>
                </div>
            }
           
        </div>
    </div>
  )
}

export default Navbar
