import ThirdVideo from '../videoFolder/Adventures-In-Imagination-M-S-Food-TV-Ad-2014 (2).mp4'
import './sectionFive.scss'
function SectionFive({switchLight,Excellent_Services}){
   return(
    <>
      <div style={switchLight ? {backgroundColor:"#403d3d"}:{backgroundColor:"white"}} data-aos ="fade-right" className="generalBlock">
        <div className = "videoBackground">
            <div className="overlay">
            <div className='circleHeader'>
                    <h1>{Excellent_Services}</h1>
                </div>
            </div>
            <video src={ThirdVideo} autoPlay muted ></video>
            </div>
        </div>
    </>
   )
}

export default SectionFive