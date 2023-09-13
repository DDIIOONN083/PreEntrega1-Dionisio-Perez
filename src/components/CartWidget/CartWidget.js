/**
 * @Author: Your name
 * @Date:   2023-09-12 22:16:05
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-09-13 12:10:54
 */
import './CartWidget.css';
import cart from './assets/cart.svg'
const CartWidget = () =>{
    return ( 
        <div>
        <img src={cart} alt="cart-wdiget" className="cart-wid"/>        
 {/*        <h3 className='number'>0  </h3> */}
        0   
        </div>  
    )
    }
    
    export default CartWidget
 