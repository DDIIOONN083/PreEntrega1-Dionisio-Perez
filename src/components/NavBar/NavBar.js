/**
 * @Author: Your name
 * @Date:   2023-09-12 22:16:05
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-09-13 12:50:02
 */


/* import { ArrowRight } from 'react-bootstrap-icons'; */
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget"



const NavBar = () =>{
return (
  
<nav>
  <section > 
  <div className="containers ">

    <div className="rows">
      <div className="row is-1">
      <h2  className='title $box-shadow '> Tienda Digital  </h2>
       </div>
      <div className="row is-2"> 
      <h4  className='subtitle'> E-commerce </h4>
       </div> 
    </div> 

      <div className="columns ">
    {/*   <div className='box'> */}
    
      <div className="column is-1  ">
      <button className='column button is-primary ' >Celulares</button>
         </div>
          <div className="column is-2 ">
          <button className='column button is-primary'> Notebooks</button>
          </div>
          <div className="column is-3">
          <button className='column button is-primary'>Laptops</button>
        </div>
        
        <div className="column is-9">
        <CartWidget className='column'></CartWidget>  
        </div>
   </div>
   </div>     
{/*    </div>  */}
 
  </section> 
  
</nav> 
)
}

export default NavBar