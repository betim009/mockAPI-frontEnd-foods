import './header.css'
import MyNavBar from "../my-navBar";
import logo from '/logo.png'

export default function Header(params) {
    return (
        <header className='my-header'>
            <h3>
                <img className='logo-app' src={logo} alt="" />
            </h3>

            <MyNavBar />
        </header>
    )
}