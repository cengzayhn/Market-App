import React, { useState } from 'react';
import './Acordion.css';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import {CardContent} from "@mui/material";
import Cart from '../../_cart/Cart';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice';


const AcordionSidebar = (props) => {

  const dispatch = useDispatch();
  const myProducts = useSelector(state=>state.products.products);
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])



  const[success, setSuccess] = useState(false);

  

  
  const items = []
  props.itemList.map((item)=>{
    items.push(item)
  })

  const handleBuybutton=()=>{
    setSuccess(true);
    setTimeout(()=>{
      window.location.reload();
    },2000)
  }

  return (
    <>
      <div className='acordion_container'>
        <CardContent className="acordion_card">
        <div>
            <ShoppingCartRoundedIcon  className="acordion_icon"></ShoppingCartRoundedIcon>
            <span className="acordion_cartxt">Cart</span>
        </div>
        {props.itemList.length==0?(
          <>
            <div className="acordion_note" >
            <span style={{color:"white"}}>Add some products in the cart :( </span>
        </div>
          </>
        ):(
          <>
            <Cart itemList={props.itemList} addList={props.addList} mySize={props.mySize} changeSize={props.changeSize} switchVal={props.switchVal}          productPrice={props.productPrice} updatePrice={props.updatePrice} countries={props.countries}/>
            <button onClick={handleBuybutton} className='acordion_button'>Buy Now</button>  
          </>
        )}
        </CardContent>
      </div>
      {success&&(
        <div className='acordion_success'>
          Process Succeeded ! 
        </div>
      )}
          
      
    </>
    
  )
}

export default AcordionSidebar