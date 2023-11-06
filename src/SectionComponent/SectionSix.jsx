
import './sectionSix.scss' ;     
   import { useState,useEffect } from 'react';
import { Button,Card } from 'react-bootstrap';

import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import TeamPic from '../free-icon-team-building-8578080.png'

function SectionSix({
  switchLight,
  textShowing,
  max,
  Team,
  nameAndSurname,
  chefNameSurNameOne,
  chefNameSurNameTwo,
chefNameSurNameThree,
 chefNameSurNameFour,
 RankOne,
 RankTwo,
RankThree,
 ageChef,
YearsOld,
Specialy,
Website,
SeeInfo,
ReadLess,
readMore
}){
   const [chefData, setChefData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showLess,setShowLess] = useState(true)

if (textShowing.length === max) {
  return (
    <span>{textShowing}</span>
  )
}

  const openModal = (chef)=>{
setChefData(chef);
setModalIsOpen(true)
  }

  const closeModal = () =>{
    setChefData(null);
setModalIsOpen(false)
  }

//chef Data

const dataChef =  [
  {
     "id":1,
     "full_name": chefNameSurNameOne,
     "age": "29",
     "image":"https://images01.nicepage.com/f8/6d/f86dbd2887379903bd41d9e5ebbaa95c.jpeg",
     "rank": RankOne,
     "website": "wwww.w3schools.com"
  },
  {
      "id":2,
      "full_name": chefNameSurNameTwo,
      "age": "33",
      "image":"https://images01.nicepage.com/2f/e4/2fe430ce8a477aadf44024c5db0246fd.jpeg",
      "rank":  RankTwo,
      "website": "wwww.w3schools.com"
  },
  {
     "id":3,
     "full_name": chefNameSurNameThree,
     "age": "44",
     "image":"https://images01.nicepage.com/9c/82/9c827f3c6aaefd68855732c9c1e5f9fa.jpeg",
     "rank": RankThree,
     "website": "wwww.w3schools.com"
  },
  {
     "id":4,
     "full_name": chefNameSurNameFour,
     "age": "49",
     "image":"https://images01.nicepage.com/76/cf/76cf44489baf7a04470fd5e9f096aa3b.jpeg",
     "rank": RankThree,
     "website": "wwww.w3schools.com"
  }
]


  return(
<>
<div style={switchLight?{backgroundColor:"#403d3d"}:{backgroundColor:"white"}} className='ChefsBlock bg-dark'>
<div style={switchLight?{backgroundColor:"#403d3d"}:{backgroundColor:"white"}} className='Circle bg-dark'>
<div className={switchLight?'iconBlock bg-dark':'iconBlock'}>
  <img src={TeamPic} alt="" />
</div>
<h1 style={switchLight?{color:"white"}:{color:"black"}}>{Team}</h1>
</div>
<div className="shortTextBlock d-flex justify-content-center align-items-start gap-2">
  

  <div className='paragraphBlock d-flex justify-content-center align-items-start gap-2'>
  <span style={switchLight?{color:"white"}:{color:"black"}}>{showLess?`${textShowing.substring(0,max)}... ` : textShowing} </span> 
  <p className='text-success' onClick={()=>setShowLess(!showLess)}>{showLess? <p>{readMore}</p>: <p>{ReadLess}</p>}</p>
  </div>
 
</div>
  <div className='blockgeneral d-flex justify-content-center align-items-center gap-3 '>
  {dataChef.map((item)=>{
    return( 
      <>
   <div style={switchLight?{backgroundColor:"#403d3d",width:"20em"}:{backgroundColor:"white",width:"20em"}} className="card d-flex justify-content-center align-items-center flex-column">
   <div className="imageBlock">
        <img src={item.image} alt="" />
      </div>
      <h2 style={switchLight?{color:"white",textAlign:"center"}:{color:"black",textAlign:"center"}}>{nameAndSurname}: {item.full_name}</h2>
      <p style={switchLight?{color:"white",textAlign:"center"}:{color:"black",textAlign:"center"}}>{ageChef}: {item.age} {YearsOld}</p>
     <Button onClick={()=>openModal(item)}>{SeeInfo}</Button>
   </div>


     
      </>
    )
  })}
  </div>
</div>
<Modal className="modalBlock" isOpen={modalIsOpen} onRequestClose={closeModal} >

{chefData && (

<Card style={{ width: '18rem' }}>
<Card.Img variant="top"src={chefData.image} alt={chefData.name} />
<Card.Body>
  <Card.Title>
  <h2>{chefData.full_name}</h2>
  </Card.Title>
  <Card.Text>
  <p>{ageChef}: {chefData.age} {YearsOld}</p>
  <p>{Specialy}: {chefData.rank}</p>
  <p>{Website} : <a href={chefData.website}>wwww.w3schools.com</a></p>
  </Card.Text>
  <Button variant='danger' onClick={closeModal}><FaTimes />Close</Button>
</Card.Body>
</Card>
        )}

        </Modal>
</>
  )
  
}

export default SectionSix