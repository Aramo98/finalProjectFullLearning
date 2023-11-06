import { Container } from 'react-bootstrap';
import './sectionOne.scss';
import  AOS  from 'aos';
import 'aos/dist/aos.css'
import firstVideo from '../videoFolder/The-Heavy-Hitting-Burger-Promo-Video.mp4';

 function SectionOne({switchLight,ourPassion}) {
    AOS.init({duration:3000})
  
    return(
        <>
        <div style={switchLight ? {backgroundColor:"#403d3d"}:{backgroundColor:"white"}} data-aos ="fade-right" className="generalBlockOne">
        <div className = "videoBackground">
            <div className="overlay">
                <div className='circleHeader'>
                    <h1>{ourPassion}</h1>
                </div>
            </div>
            <video src={firstVideo} autoPlay muted ></video>
            </div>
        </div>
            
            
 
        </>
    )
 }

 export default SectionOne