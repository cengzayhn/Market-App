import './SideBar.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice';

const SideBar=(props)=>{
    
         


    const saveSizes=(e)=>{
        props.changeSize(e);
    }


    return(
        <div>
            <div className="sidebar_container">
                <div className="sidebar_text">Sizes: </div>
                <div>
                    <span className="sidebar_sizes" onClick={saveSizes} val="XS">XS</span>
                    <span className="sidebar_sizes" onClick={saveSizes} val="S">S</span>
                    <span className="sidebar_sizes" onClick={saveSizes} val="M">M</span>
                </div>
                <div>
                    <span className="sidebar_sizes" onClick={saveSizes} val="L">L</span>
                    <span className="sidebar_sizes" onClick={saveSizes} val="XL">XL</span>
                    <span className="sidebar_sizes" onClick={saveSizes} val="XXL">XXL</span>
                        
                </div>
                
            
            </div>
        </div>
    )
}




export default SideBar;