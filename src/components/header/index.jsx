import './header.css'
import MyNavBar from "../my-navBar";

export default function Header(params) {
    return (
        <header className='my-header'>
            <h3>App</h3>

            <MyNavBar />
        </header>
    )
}