import '../main-content/MainContent.css';
import { CardContent } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {getProducts} from '../../redux/productSlice'
const Product =(props)=>{
    
    
    const dispatch = useDispatch();
    const myProducts = useSelector(state=>state.products.products)
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

     


    const content = (
        <ul>
            {myProducts.map(product=>(
                <li key={product.id}>
                    Price : {product.price}
                </li>
            ))}
        </ul>
    )
         




    return(
        <div>
            <CardContent className="main_card">
                <div>
                    <img src={props.newPhoto}  className="main_image"/>
                </div>
                <div className="main_text">
                    {props.newProduct}
                </div>
                <div>
                    <span style={{fontWeight:"bold"}}>{props.newPrice}</span>
                </div>
                <div>
                    <button className="main_button" onClick={props.addList} itemname={props.newitemName}>Add to Cart</button>
                </div>
                </CardContent>
                
        </div>
    )
}










export default Product;