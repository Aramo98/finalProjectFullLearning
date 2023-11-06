
import secondVideo from '../videoFolder/FOOD-REEL-2-tabletop-highspeed-dop-Sven-Siegrist.mp4'
import './sectionThree.scss';
import image1 from '../FoodPic/3171d7e785a81496bc0e8310b3d17de3.jpeg';
import image2 from '../FoodPic/4d5c47276771815f2c8e0f5db9b245f2.jpeg'
import image3 from '../FoodPic/7f9d835baa63dc5b65349d66ad048a96.jpeg'
import image4 from '../FoodPic/3171d7e785a81496bc0e8310b3d17de3.jpeg'
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';

function SectionThree ({
  switchLight,
  catering,
  orderParagraph,
  freshSalads,
  partyPlatters,
  seaFood,
  vegganDesserts
}){
  AOS.init({
    duration:2000
})
return(
    <>
      <div data-aos = "fade-left" style={switchLight? {backgroundColor:"#403d3d"}:{backgroundColor:"white"}} className="generalBlockThree">
        <div className = "videoBackground">
            <div className="overlay">
                <div className="header_paragraph">
                    <h2>{catering}</h2>
                    <p>{orderParagraph}</p>
                </div>
            <Carousel className="FoodCarousel" fade>
      <Carousel.Item className='FoodCarousel_item'>
      <div className="block">
        <div className="imageBlock">
            <img src={image1} alt="" />
        </div>
        <h3 className="text-white">{freshSalads}</h3>
      </div>
    
     <div className="block">
        <div className="imageBlock">
            <img src={image2} alt="" />
        </div>
        <h3 className="text-white">{partyPlatters}</h3>
      </div>
         
          <div className="block">
        <div className="imageBlock">
            <img src={image3} alt="" />
        </div>
        <h3 className="text-white">{seaFood}</h3>
      </div>

       <div className="block">
        <div className="imageBlock">
            <img src={image4} alt="" />
        </div>
        <h3 className="text-white">{vegganDesserts}</h3>
      </div>

      </Carousel.Item>

      <Carousel.Item className='FoodCarousel_item'>
      <div className="block">
        <div className="imageBlock">
            <img src={image4} alt="" />
        </div>
        <h3 className="text-white">{freshSalads}</h3>
      </div>
    
     <div className="block">
        <div className="imageBlock">
            <img src={image3} alt="" />
        </div>
        <h3 className="text-white">{partyPlatters}</h3>
      </div>
         
          <div className="block">
        <div className="imageBlock">
            <img src={image2} alt="" />
        </div>
        <h3 className="text-white">{seaFood}</h3>
      </div>

       <div className="block">
        <div className="imageBlock">
            <img src={image1} alt="" />
        </div>
        <h3 className="text-white">{vegganDesserts}</h3>
      </div>
       
      </Carousel.Item>

      <Carousel.Item className='FoodCarousel_item'>
      <div className="block">
        <div className="imageBlock">
            <img src={image2} alt="" />
        </div>
          <h3 className="text-white">{freshSalads}</h3>
      </div>
    
     <div className="block">
        <div className="imageBlock">
            <img src={image3} alt="" />
        </div>
          <h3 className="text-white">{partyPlatters}</h3>
      </div>
         
          <div className="block">
        <div className="imageBlock">
            <img src={image4} alt="" />
        </div>
          <h3 className="text-white">{seaFood}</h3>
      </div>

       <div className="block">
        <div className="imageBlock">
            <img src={image1} alt="" />
        </div>
         <h3 className="text-white">{vegganDesserts}</h3>
      </div>
       
      </Carousel.Item>
    </Carousel>
            </div>
            <video src={secondVideo} autoPlay muted ></video>
            </div>
        </div>
    </>
)
}

export default SectionThree