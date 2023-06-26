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
 
const MainContent =(props)=>{
    
    return(
        <div>
            <div className="main_container">
                <Grid container>
                        <Grid item xs={3}>
                            <CardContent className="main_card">
                                <div>
                                    <img src={foto1}  className="main_image"/>
                                </div>
                                <div className="main_text">
                                    Cropped Stay Groovy
                                </div>
                                <div>
                                    <span style={{fontWeight:"bold"}}>$10.90</span>
                                    <span style={{fontWeight:"lighter"}}> or 9 x$1.21</span>
                                </div>
                                <div>
                                    <button className="main_button" onClick={props.addList} itemname="cropped">Add to Cart</button>
                                </div>
                            </CardContent>
                        </Grid>
                        <Grid item xs={3}>
                            <CardContent className="main_card">
                                <div>
                                    <img src={foto2}  className="main_image"/>
                                </div>
                                <div className="main_text">
                                    Basic Cactus White T-shirt
                                </div>
                                <div>
                                    <span style={{fontWeight:"bold"}}>$13.25</span>
                                    <span style={{fontWeight:"lighter"}}> or 3 x$4.42</span>
                                </div>
                                <div>
                                    <button className="main_button" onClick={props.addList} itemname="cactus">Add to Cart</button>
                                </div>

                            </CardContent>
                        </Grid>
                        <Grid item xs={3}>
                            <CardContent className="main_card">
                                <div>
                                    <img src={foto3}  className="main_image"/>
                                </div>
                                <div className="main_text">
                                    Skater Black Sweatshirt
                                </div>
                                <div>
                                    <span style={{fontWeight:"bold"}}>$25.90</span>
                                    <span style={{fontWeight:"lighter"}}>or 12 x$2.16</span>
                                </div>
                                <div>
                                    <button className="main_button" onClick={props.addList} itemname="skater">Add to Cart</button>
                                </div>
                            </CardContent>
                        </Grid>
                        <Grid item xs={3}>
                            <CardContent className="main_card">
                                <div className="main_image">
                                    <img src={foto4}  className="main_image"/>
                                </div>
                                <div className="main_text">
                                    Black Tule Oversized
                                </div>
                                <div>
                                    <span style={{fontWeight:"bold"}}>$29.45</span>
                                    <span style={{fontWeight:"lighter"}}>or 5 x$5.89</span>
                                </div>
                                <div>
                                    <button className="main_button" onClick={props.addList} itemname="tule">Add to Cart</button>
                                </div>
                            </CardContent>
                        </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={3}>
                        <CardContent className="main_card">
                            <div>
                                <img src={foto5}  className="main_image"/>
                            </div>
                            <div className="main_text">
                                Black Batman T-shirt
                            </div>
                            <div>
                                <span style={{fontWeight:"bold"}}>$10.90</span>
                                <span style={{fontWeight:"lighter"}}>or 9 x$1.21</span>
                            </div>
                            <div>
                                <button className="main_button" onClick={props.addList} itemname="batman">Add to Cart</button>
                            </div>
                        </CardContent>
                    </Grid>
                    <Grid item xs={3}>
                        <CardContent className="main_card">
                            <div>
                                <img src={foto6}  className="main_image"/>
                            </div>
                            <div className="main_text">
                                Blue T-Shirt
                            </div>
                            <div>
                                <span style={{fontWeight:"bold"}}>$9.00</span>
                                <span style={{fontWeight:"lighter"}}> or 3 x$3.00</span>
                            </div>
                            <div>
                                <button className="main_button" onClick={props.addList} itemname="blue">Add to Cart</button>
                            </div>

                        </CardContent>
                    </Grid>
                    <Grid item xs={3}>
                        <CardContent className="main_card">
                            <div>
                                <img src={foto7}  className="main_image"/>
                            </div>
                            <div className="main_text">
                                Loose Black T-shirt
                            </div>
                            <div>
                                <span style={{fontWeight:"bold"}}>$14.00</span>
                                <span style={{fontWeight:"lighter"}}>or 5 x$2.80</span>
                            </div>
                            <div>
                                <button className="main_button" onClick={props.addList} itemname="loose">Add to Cart</button>
                            </div>
                        </CardContent>
                    </Grid>
                    <Grid item xs={3}>
                        <CardContent className="main_card">
                            <div className="main_image">
                                <img src={foto8}  className="main_image"/>
                            </div>
                            <div className="main_text">
                                Ringer Hall Pass
                            </div>
                            <div>
                                <span style={{fontWeight:"bold"}}>$10.90</span>
                                <span style={{fontWeight:"lighter"}}>or 9 x$1.21</span>
                            </div>
                            <div>
                                <button className="main_button" onClick={props.addList} itemname="ringer">Add to Cart</button>
                            </div>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}




export default MainContent;