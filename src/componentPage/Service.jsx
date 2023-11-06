import {Card } from "react-bootstrap";
import backVideo from '../videoFolder/Adventures-In-Imagination-M-S-Food-TV-Ad-2014 (2).mp4';
import Clock from '../clock.png';
import FoodService from '../food-service.png';
import Chef from  '../chef.png';
import './service.scss';
 import AOS from 'aos';
 import {Helmet} from 'react-helmet'
function Service({ ServiceHeaderOne,
ServiceHeaderTwo,
ServiceHeaderThree,
switchLight,
OurService
}) {

    AOS.init({
    duration: 2000
    })

    const ServiceData = [
        {
            id:1,
            serviceImage:  Clock,
            serviceHeader: ServiceHeaderOne
        },
        {
            id:2,
            serviceImage:  FoodService,
            serviceHeader: ServiceHeaderTwo
        },
        {
            id:2,
            serviceImage:  Chef,
            serviceHeader: ServiceHeaderThree
        },
    ]
    
    return(
        <>
           <Helmet>
      <title>{OurService}</title>
      <meta charSet="UTF-8" />

    </Helmet>
    <div style = {switchLight?{backgroundColor:"#403d3d"}:{backgroundColor:"white"}} className="generalBlockThree">
    <div className="videoBlock">
        <video src={backVideo} />
        <div className="overlay">
        <div className='circleHeader'>
        <h1 style = {switchLight?{color:"white"}:{color:"black"}}>{OurService}</h1>
                </div>

              
        </div>
        </div>
    </div>
        

        <div data-aos = "fade-up" className="services d-flex justify-content-center align-items-center gap-5 flex-wrap" >
        {ServiceData.map((service)=>{
                return(
                    <>

<Card className="services d-flex justify-content-center align-items-center gap-5 flex-columnd" style = {switchLight?{backgroundColor:"#403d3d"}:{backgroundColor:"white"}}  key={service.id} >
      <div className="iconImage">
      <img src={service.serviceImage} alt="" />
      </div>
      <Card.Body>
        <Card.Title>{service.serviceHeader}</Card.Title>
      </Card.Body>
    </Card>
                    </>
                )
            })}
       </div>
       
        </>
    )
}

export default Service