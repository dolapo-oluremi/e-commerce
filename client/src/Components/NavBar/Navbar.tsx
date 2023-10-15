import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('Shop')
    const getTab = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLInputElement;
        setActive(target.innerText)
    };
    const menuItems = [
        "Shop",
        "Mens",
        "Womens",
        "Kids"
    ];
    const MenuList = () => {
        return (
            <ul className="nav-menu">
                {menuItems.map((menuName, i) => {
                    const routePath = menuName === "Shop" ? "/" : `/${menuName.toLowerCase()}`;
                    return <li key={i} onClick={(e) => getTab(e)}><Link to={routePath}>{menuName}</Link>{active === menuName && <hr />}</li>
                })}
            </ul>
        )
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt='logo-icon' />
                <p>tOgs</p>
            </div>
            {<MenuList />}
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt='cart-icon' /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar