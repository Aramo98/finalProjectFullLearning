
import {FaFacebook,FaTwitter,FaInstagram,FaGooglePlus,FaMapMarker,FaCopyright }  from 'react-icons/fa'
 import'../AddresBlock/adress.scss'
function Address({ligtAndDark,locationHeader ,location ,FollowUs}){
return(
    <>
    <div className="addressBlock">
    <div className="locationBlock">
    <div className="Header">
        <h2 style={ligtAndDark?{color:"white"}:{color:"black"}}>{locationHeader}</h2>
        <p style={ligtAndDark?{color:"white"}:{color:"black"}}><FaMapMarker />{location} </p>
      </div>
    </div>
    <div className="socialBlock">
        <div className='SocialHeader'>
            <h2 style={ligtAndDark?{color:"white"}:{color:"black"}}>{FollowUs}</h2>
        </div>
        <div className="scl">
            <ul>
                <li><a style={ligtAndDark?{color:"white"}:{color:"black"}} className='facebook' href="#"><FaFacebook /></a></li>
                <li><a style={ligtAndDark?{color:"white"}:{color:"black"}} className='twitter' href="#"><FaTwitter /></a></li>
                <li><a style={ligtAndDark?{color:"white"}:{color:"black"}} className='instagram' href="#"><FaInstagram /></a></li>
                <li><a style={ligtAndDark?{color:"white"}:{color:"black"}} className='googleplus' href="#"><FaGooglePlus /></a></li>
            </ul>
        </div>
        <div className="copyRight fs-5">
            <p style={ligtAndDark?{color:"white"}:{color:"black"}}><FaCopyright /> 2023 Privacy policy</p>
        </div>
    </div>
    </div>   
    </>
)
}

export default Address