  import './sectionFour.scss'

import KitchenBook from '../FoodPic/recipe-book.png';
import {Card} from "react-bootstrap"
  function SectionFour({switchLight,Our_Menu, MenuHeaderOne, MenuHeaderTwo ,MenuHeaderThree,  PizzaRecipe, SaladRecipe,DessertRecipe }){



 const menuData  = [
      {
       "id": 1,
       "image":"https://images01.nicepage.com/56/df/56df4d594b6cfe89c3cab7a6f6be1b07.jpeg",
       "head": MenuHeaderOne,
       "paragraph": PizzaRecipe
    
      },
      {
          "id": 2,
          "image":"https://images01.nicepage.com/9e/00/9e0024470b0f8316708609efdc4d2f57.jpeg",
          "head": MenuHeaderTwo,
          "paragraph": SaladRecipe
  
      },
      {
          "id": 3,
          "image":"https://images01.nicepage.com/b8/1d/b81dc61f5cc588090e947e2da8347594.jpeg",
          "head": MenuHeaderThree,
          "paragraph": DessertRecipe
       
      }
      
  ]




return(
    <>
        <div style = {switchLight?{backgroundColor:"#403d3d"}:{backgroundColor:"white"}} className="FourBlock  d-flex justify-content-center align-items-center flex-column">
        <div style = {switchLight?{backgroundColor:"#403d3d"}:{backgroundColor:"white"}} className="Circle">
           <div className="imgBlock">
           <img src={KitchenBook} alt="" />
           </div>
           <h1 style = {switchLight?{color:"white"}:{color:"black"}}>{Our_Menu}</h1>
        </div>
       <div className='dataBlock w-100  d-flex justify-content-center align-items-center gap-5 '>
        {
            menuData.map((item)=>{
                return(
                    <>
                    <Card className="dataCard" style={{marginTop:"5%",border:"none"}} key ={item.id}>
                       <Card.Body style={switchLight?{backgroundColor:"#403d3d"}:{backgroundColor:"white"}}>
                      <Card.Title > <h3 className={switchLight?'text-white':'text-secondary-emphasis'}>{item.head}</h3> </Card.Title>
                      <Card.Text  className={switchLight?'text-white':'text-secondary'}>{item.paragraph}</Card.Text>
                      <div className='foodImg'>
                        <img src={item.image} alt={item.head} />
                        </div>
   
                       </Card.Body>
                    </Card>
                    
                    
                    </>
                )
            })
        }
       </div>    
    </div>
    </>
)
  }

  export default SectionFour