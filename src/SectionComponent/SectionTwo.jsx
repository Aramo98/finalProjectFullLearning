
import HatChef from '../chef.png'
import {Card,Button} from 'react-bootstrap';

import "./sectionTwo.scss"
import { useState } from 'react';
import  AOS  from 'aos';
import 'aos/dist/aos.css'
function SectionTwo({switchLight,
    menu,
    readMore,
    blockHeaderOne,
    blockHeaderTwo,
    blockHeaderThree,
    blockParagraphOne,
    blockParagraphTwo,
    blockParagraphThree}){

AOS.init({
    duration:2000
})


    const data = [
        {
            id: 1,
            Head: blockHeaderOne,
            Paragraph: blockParagraphOne,
            domains:"https://bennettfeely.com/clippy/"
            },
            {
                id: 2,
                Head: blockHeaderTwo,
                Paragraph: blockParagraphTwo,
                domains :"https://www.youtube.com/watch?v=wmmKcQ5ZsUk"
            },
            {
                id: 3,
                Head: blockHeaderThree,
                Paragraph: blockParagraphThree,
                 domains :"https://www.youtube.com/watch?v=wmmKcQ5ZsUk"
            }
          ]



return(
    <>
    <div style={switchLight? {backgroundColor:"#403d3d"}:{backgroundColor:"white"}}  className="SecondBlock  d-flex justify-content-center align-items-center flex-column">
        <div  style={switchLight? {backgroundColor:"#403d3d"}:{backgroundColor:"white"}} data-aos = "fade-down" className="Circle">
           <div className="imgBlock">
           <img src={HatChef} alt="" />
           </div>
           <h1 style = {switchLight ? {color:"white"}:{color:"black"}}>{menu}</h1>
        </div>
       <div className='MenuBlock w-100  d-flex justify-content-center align-items-center gap-5'>
    {data.map((item)=>{
        return(
       
             <Card className='cards'  style={switchLight? {backgroundColor:"#403d3d"}:{backgroundColor:"white"}} data-aos = "fade-up" key={item.id} >
      
      <Card.Body>
     <h1 className='text-secondary text-center'> {"0" + item.id}</h1>  
        <Card.Title style={switchLight ? {color:"white"}:{color:"black"}}> <h1 className=' text-center'>{item.Head}</h1> </Card.Title>
        <Card.Text   style={switchLight ? {color:"white"}:{color:"black"}}>
        {item.Paragraph}
        </Card.Text>
    <a href={item.domains} className = "ReadBtn btn btn-success">{readMore}</a>
      </Card.Body>
    </Card>
       
        )
    })}
       </div>    
    </div>
    </>
)
}

export default SectionTwo