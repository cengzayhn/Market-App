import {useState,useEffect} from "react";
import {Grid} from "@mui/material";
import SideBar from "./sidebar/SideBar";
import MainContent from "./main-content/MainContent";
import Acordion from "./acordionbar/Acordion";
import axios from 'axios';
import {configureStore } from '@reduxjs/toolkit';

function Template(){

    
    const[itemList, setItemList] = useState([]);
    const[show, setShow] = useState(false);
    const[mySize,setMySize] = useState();
    const[switchVal,setSwitchVal] = useState();
    const[productPrice, setProductPrice] = useState();
    const[countries,setCountries] = useState([]);

   
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
    
        /*useEffect(()=>{
            fetch('https://restcountries.com/v3.1/all')
            .then(response=>response.json())
            .then(response=>setCountries(response));
        },[])
        console.log(countries[0])
*/

        useEffect(()=>{
            axios.get('https://restcountries.com/v3.1/all')
            .then(response=>setCountries(response.data))
            .catch(error=>console.log(error));

        },[])



        return(
            <div>
                <Grid container>
                    <Grid item xs={2}>
                        <SideBar mySize={mySize} changeSize={changeSize}/>
                    </Grid>
                    <Grid item xs={7}>
                        <MainContent itemList={itemList} addList={addList} switchVal={switchVal} countries={countries}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Acordion itemList={itemList} addList={addList} show={show}  mySize={mySize} changeSize={changeSize}  
                        switchVal={switchVal} productPrice={productPrice} updatePrice={updatePrice} countries={countries}/>
                    </Grid>
                </Grid>
            </div>
        )
    }




export default Template;