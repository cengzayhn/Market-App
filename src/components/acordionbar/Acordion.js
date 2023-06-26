import './Acordion.css';
import { useState } from "react";
import AcordionSidebar from "./AcordionSidebar";
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const Acordion=(props)=>{
    const [isShown, setIsShown] = useState(true);
 
    const handleClick=()=>{
        setIsShown(state=>!state);
    }

    return(
        <div>
            {isShown&&props.show?( 
                <>
                    <span onClick={handleClick}><EastRoundedIcon className="acordion_rightarrow"></EastRoundedIcon></span>
                    <AcordionSidebar itemList={props.itemList} addList={props.addList}  mySize={props.mySize} changeSize={props.changeSize}                  switchVal={props.switchVal} productPrice={props.productPrice} updatePrice={props.updatePrice}/> 
                </>
            ):(
                <>
                    <span onClick={handleClick}><WestRoundedIcon className="acordion_leftarrow"></WestRoundedIcon></span>
                </>

            )}
        </div>
    )
}

export default Acordion;