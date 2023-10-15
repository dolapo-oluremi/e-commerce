import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrestIcon from '../Assets/pintester_icon.png'
import whatsappIcon from '../Assets/whatsapp_icon.png'

const icons = [instagram_icon, pintrestIcon, whatsappIcon]

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt='footer-logo' />
                <p>Shopper</p>
            </div>
            <ul className="footer-links">
                <li>company</li>
                <li>products</li>
                <li>office</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <div className="footer-social-icon">
                {icons.map((v, i) => <div className="footer-icon-container" key={i}>
                    <img src={v} alt={`${v}-icon`} />
                </div>)}
            </div>
            <div className="footer-copyright">
                <hr />
                <p>CopyRight @ 2023 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer