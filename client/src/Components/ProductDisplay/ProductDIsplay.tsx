import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const ProductDIsplay = (props) => {
    const { product } = props
    const{addToCart} = useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(22)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                    ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt adipisci expedita culpa laborum. Sunt iusto reiciendis sequi! Tempora, laborum!
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>s</div>
                        <div>m</div>
                        <div>l</div>
                        <div>xl</div>
                        <div>xxl</div>
                    </div>
                </div>
                <button onClick={()=>{
                    addToCart(product.id)
                }}>Add to cart</button>
                <p className="productdisplay-right-category">
                    <span>Category:</span>

                </p>
                <p className="productdisplay-right-category">
                    <span>Tags:</span>
                </p>
            </div>
        </div>
    )
}

export default ProductDIsplay