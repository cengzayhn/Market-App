import {useState} from "react";
import {Grid} from "@mui/material";
import SideBar from "./sidebar/SideBar";
import MainContent from "./main-content/MainContent";
import Acordion from "./acordionbar/Acordion";
function Template(){
    
    const[itemList, setItemList] = useState([]);
    const[show, setShow] = useState(false);
    const[mySize,setMySize] = useState();
    const[switchVal,setSwitchVal] = useState();
    const[productPrice, setProductPrice] = useState();

   
    const updatePrice=(price)=>{
        setProductPrice(price);
    }

    const changeSize=(e)=>{
        const sizeReached = e.target.getAttribute("val");
        setMySize(sizeReached);
    }

    const arbitraryList=[];

    const addList = (e)=>{
        //sets the itemList
        setShow(true);
        const item = e.target.getAttribute("itemname");
        setSwitchVal(item);
        arbitraryList.push(item); 
        setItemList(arbitraryList);
    }
    
        return(
            <div>
                <Grid container>
                    <Grid item xs={2}>
                        <SideBar mySize={mySize} changeSize={changeSize}/>
                    </Grid>
                    <Grid item xs={7}>
                        <MainContent itemList={itemList} addList={addList} switchVal={switchVal}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Acordion itemList={itemList} addList={addList} show={show}  mySize={mySize} changeSize={changeSize}  
                        switchVal={switchVal} productPrice={productPrice} updatePrice={updatePrice}/>
                    </Grid>
                </Grid>
            </div>
        )
    }




export default Template;