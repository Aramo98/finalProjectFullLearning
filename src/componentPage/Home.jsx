import SectionOne from '../SectionComponent/SectionOne';
import SectionTwo from '../SectionComponent/SectionTwo';
import SectionThree from '../SectionComponent/SectionThree';
import SectionFour from '../SectionComponent/SectionFour';
import SectionFive from '../SectionComponent/SectionFive';
import '../App.scss';
import SectionSix from '../SectionComponent/SectionSix';
import {Helmet} from 'react-helmet'

function Home ({
  switchLight,
  ourPassion,
  menu,
  readMore,
  ReadLess,
  catering,
  orderParagraph,
  freshSalads,
  partyPlatters,
  seaFood,
  vegganDesserts,
  Our_Menu,
  Excellent_Services,
  Team,
  nameAndSurname,
  blockHeaderOne,
  blockHeaderTwo,
  blockHeaderThree,
  blockParagraphOne,
  blockParagraphTwo,
  blockParagraphThree,
  textShowing,
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
MenuHeaderOne,
MenuHeaderTwo,
MenuHeaderThree,
PizzaRecipe,
SaladRecipe,
DessertRecipe,
SeeInfo,
home
}){
return(
    <>
     <Helmet>
      <title>{home}</title>
      <meta charSet="UTF-8" />

    </Helmet>
    < SectionOne
     switchLight={switchLight} 
    ourPassion={ourPassion} />
    <SectionTwo switchLight={switchLight}
     menu={menu}
      readMore={readMore} 
      blockHeaderOne = {blockHeaderOne}
      blockHeaderTwo = {blockHeaderTwo}
      blockHeaderThree = {blockHeaderThree}
    blockParagraphOne={blockParagraphOne}
    blockParagraphTwo={blockParagraphTwo}
    blockParagraphThree ={blockParagraphThree}
      />
    <SectionThree  
    switchLight={switchLight}
       catering={catering} 
orderParagraph={orderParagraph}
freshSalads={freshSalads}
partyPlatters={partyPlatters}
seaFood={seaFood}
vegganDesserts={vegganDesserts}

       />
    <SectionFour  
    switchLight={switchLight} 
    Our_Menu={Our_Menu}
    MenuHeaderOne = {MenuHeaderOne}
    MenuHeaderTwo = {MenuHeaderTwo}
  MenuHeaderThree = {MenuHeaderThree}
  PizzaRecipe = {PizzaRecipe}
  SaladRecipe = {SaladRecipe}
DessertRecipe = {DessertRecipe}
    />
    <SectionFive 
    switchLight={switchLight} 
    Excellent_Services={Excellent_Services}
    />
    <SectionSix  
    switchLight = {switchLight}
    max = {43} 
    textShowing ={textShowing}
      nameAndSurname={nameAndSurname}
      Team={Team}
      chefNameSurNameOne ={chefNameSurNameOne}
      chefNameSurNameTwo ={chefNameSurNameTwo}
     chefNameSurNameThree ={chefNameSurNameThree}
     chefNameSurNameFour ={chefNameSurNameFour}
     RankOne = {RankOne}
     RankTwo = {RankTwo}
   RankThree = {RankThree}
     ageChef = {ageChef}
    YearsOld = {YearsOld}
    Specialy = {Specialy}
    Website={Website}
    SeeInfo = {SeeInfo}
    readMore = {readMore}
    ReadLess ={ReadLess}
      />
    </>
)
}

export default Home