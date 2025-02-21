import './header.css'
import MyNavBar from "../my-navBar";
import logo from '/logo.png'
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function Header() {
    return (
        <header className='my-header'>
            <h3>
                <Link to="/">
                    <img className='logo-app' src={logo} alt="" />
                </Link>
            </h3>

            <MyNavBar />

            <div>
                <Link to="/sign-in" className='my-user-icon'>
                    <FaCircleUser size={30} />
                </Link>
            </div>
        </header>
    )
}