import { NavLink } from 'react-router-dom'
import './HeaderAuth.css'
import logo from '/logo.png'
import { IoMdArrowRoundBack } from "react-icons/io";

export default function HeaderAuth() {
    return (
        <header className="my-header-auth">
            <nav className='my-nav-auth'>
                <NavLink to='/'>
                    <img className='logo-app' src={logo} alt="" />
                    <IoMdArrowRoundBack size={30} />
                </NavLink>
            </nav>
        </header>
    )
}