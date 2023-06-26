import './Cart.css';
import foto11 from '../images/foto-cropped2.png';
import foto22 from '../images/foto-cactus2.png';
import foto33 from '../images/foto-skater2.png'; 
import foto44 from '../images/foto-tule2.png';
import foto55 from '../images/foto-batman2.png';
import foto66 from '../images/foto-blue2.png';
import foto77 from '../images/foto-loose2.png';
import foto88 from '../images/foto-ringer2.png';



const Cart=(props)=>{



    const selectImage=()=>{
        switch(props.switchVal){
            case 'cropped':
                props.updatePrice(10.90 );
                return foto11;
                
            case 'cactus':
                props.updatePrice(13.25);
                return foto22;
                
            case 'skater':
                props.updatePrice(25.90);
                return foto33;
                
            case 'tule':
                props.updatePrice(29.45);
                return foto44;
            case 'batman':
                props.updatePrice(10.90);
                return foto55;
            case 'blue':
                props.updatePrice(9.00);
                return foto66;
            case 'loose':
                props.updatePrice(14.00);
                return foto77;
            
            case 'ringer':
                props.updatePrice(10.90);
                return foto88;
            
            default:
                return 'default'
        }
    }


    const cartItems = [];
    props.itemList.map((item)=>{
        cartItems.push(item);
    })

    return(
    <div>
        <div className='cart_container'>
            <img className='cart_img' src={selectImage(props.switchVal)} alt='yuklenmedi'></img>
            <div>
                <span  className='cart_sizetext'>Product : {cartItems.toString().toUpperCase()}</span>
                <span  className='cart_sizetext'>Price : ${props.productPrice}</span>
                <span  className='cart_sizetext'>Size : {props.mySize}</span>
            </div>
        </div>
        
    </div>
    )


}

export default Cart;