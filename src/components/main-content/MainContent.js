import './MainContent.css';
import {CardContent, Grid} from "@mui/material";
import foto1 from '../../images/foto-cropped.png';
import foto2 from '../../images/foto-cactus.png';
import foto3 from '../../images/foto-skater.png';
import foto4 from '../../images/foto-tule.png';
import foto5 from '../../images/foto-batman.png';
import foto6 from '../../images/foto-blue.png';
import foto7 from '../../images/foto-loose.png';
import foto8 from '../../images/foto-ringer.png';

 
import Product from '../product/Product';

const MainContent =(props)=>{
 
    


    const tempDataArray = [
        {
            "foto":foto1,
            "productName":"Cropped Stay Groovy",
            "price":"$10.90",
            "itemname":"cropped"
        },
        {
            "foto":foto2,
            "productName":"Basic Cactus White T-shirt",
            "price":"$13.25",
            "itemname":"cactus"
        },
        {
            "foto":foto3,
            "productName":"Skater Black Sweatshirt",
            "price":"$25.90",
            "itemname":"skater"
        },
        {
            "foto":foto4,
            "productName":"Black Tule Oversized",
            "price":"$29.45",
            "itemname":"tule"
        },
        {
            "foto":foto5,
            "productName":"Black Batman T-shirt",
            "price":"$10.90",
            "itemname":"batman"
        },
        {
            "foto":foto6,
            "productName":"Blue T-Shirt",
            "price":"$9.00",
            "itemname":"blue"
        },
        {
            "foto":foto7,
            "productName":"Loose Black T-shirt",
            "price":"$14.00",
            "itemname":"loose"
        },
        {
            "foto":foto8,
            "productName":"Ringer Hall Pass",
            "price":"$10.90",
            "itemname":"ringer"
        }   
    ]
    
        
        const updateData=(foto,product,price,code)=>{
            let newPhoto = foto;
            let newProduct = product;
            let newPrice = price;
            let newitemName = code;
        }
    
        console.log(props.countries)
    return(
        <div>
            <div className="main_container">
                <Grid container>
                {props.countries.map((country)=>(
                            <Grid item xs={3}>
                                <div key={country.name.common}>
                                    {updateData(country.flag, country.name.common, country.name.common,country.name.common)}
                                    <Product newPhoto={country.flags.png} newProduct={country.name.common} newPrice={country.name.common} newitemName={country.name.common} addList={props.addList}/>
                                </div>
                            </Grid>
                        ))
                        }
                </Grid>
            </div>
        </div>
    )
}




export default MainContent;