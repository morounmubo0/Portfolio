import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../../assets/Logo.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt=""  className="logo" />
     <ul className='nav-menu'>
    <Link to="/"><li>Home</li></Link>
    <Link to="/about"><li>About</li></Link>
    <Link to="/service"><li>Service</li></Link>

     </ul>
    
    </div>

   
  )
}

export default Navbar