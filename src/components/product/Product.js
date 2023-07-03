import '../main-content/MainContent.css';
import foto1 from '../../images/foto-cropped.png';
import { CardContent } from '@mui/material';


const Product =(props)=>{
    
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