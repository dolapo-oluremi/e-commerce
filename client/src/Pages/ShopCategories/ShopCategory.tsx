import { useContext } from 'react'
import './ShopCategories.css'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../../Components/Assets/dropdown_icon.png'
import Item from '../../Components/Items/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  const currentCategory = window.location.pathname.replace("/", "").replace("s", "")
  const renderCategories = all_product.filter(item => item.category === currentCategory)
  console.log(renderCategories)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt={`${props.banner}-icon`} />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt={dropdown_icon} />
        </div>
      </div>
      <div className="shopcategory-products">
          {renderCategories.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory