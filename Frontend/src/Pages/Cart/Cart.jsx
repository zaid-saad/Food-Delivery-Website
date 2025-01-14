import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = ({}) => {

  const {food_list, cartItems,removeFromCart, gettotalcartamount , url} = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item , index)=>{
          if (cartItems[item._id]>0) 
          {
            return (

              <div key={index}>
               <div className='cart-items-title cart-items-item'>
               <img src={ url + "/images/" + item.image} alt="" />
               <p>{item.name}</p>
               <p>${item.price}</p>
               <p>{cartItems[item._id]}</p>
               <p>${item.price*cartItems[item._id]}</p>
               <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
                <hr />
              </div>
          
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${gettotalcartamount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
            </div>
          </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
      <div>
        <p>If You have a Promo Code,Enter it Here</p>
        <div className='cart-promocode-input'>
          <input type="text" placeholder='Promo Code'/>
          <button type="button">Submit</button>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
