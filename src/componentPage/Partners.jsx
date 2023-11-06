
 import { Card, Container} from "react-bootstrap";
import './partners.scss';
import PartnersData from './PartnersData.json';
import AOS from 'aos'
import backVideo from '../videoFolder/The-Heavy-Hitting-Burger-Promo-Video.mp4'
import HandShake from '../hand-shake.png';
import { Helmet } from "react-helmet";
function Partners({Partners,circleHeader,switchLight}) {
    AOS.init({
        duration: 2000
    })
    return(
        <>
     <Helmet>
      <title>{Partners}</title>
      <meta charSet="UTF-8" />

    </Helmet>

    <div style={switchLight?{backgroundColor:"#403d3d"}:{backgroundColor:"white"}} className="generalBlockTwo">
    <div style={switchLight?{backgroundColor:"#403d3d"}:{backgroundColor:"white"}} className="videoBlockOne">
        <video src={backVideo} />
        <div className="overlay">
        <div className='circleHeader'>
                    <h1>{circleHeader}</h1>
                </div>
        </div>
        </div>
    </div>

        <div style={switchLight?{backgroundColor:"#403d3d"}:{backgroundColor:"white"}} className="circle">
          <div className="partnerImage">
            <img src={HandShake} alt="" />
          </div>
        <h1 style={switchLight?{color:"white"}:{color:"black"}}>{Partners}</h1>
        </div>
        <div className="partnersBlock">
        <div style={switchLight?{backgroundColor:"#403d3d"}:{backgroundColor:"white"}} className="parthers d-flex justify-content-center align-items-center gap-5 flex-wrap">
         {PartnersData.map((partner)=>{
        return(
    <>
    <Card className="d-flex justify-content-end align-items-center" style={{width:"18em",height:"25em"}} data-aos = "fade-up" key={partner.id} >
        <Card.Img src={partner.image} variant="top"/> 
         <Card.Body>
       <a href={partner.website} className = "ReadBtn btn btn-success">Go to Website</a>
         </Card.Body>
       </Card>
    </>
       )
         })}
        </div>
        </div>
        </>
    )
}

export default Partners