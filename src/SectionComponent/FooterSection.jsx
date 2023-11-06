import { Container} from "react-bootstrap"
import Address from "./AddresBlock/Address"
import FormValidation from "./Form Block/FormValidation"
import './footerSection.scss'
import AOS from 'aos'
function FooterSection({switchLight,
   locationHeader,
   location,
   FollowUs,
   ContactForm,
   placeHolderOne,
   placeHolderTwo,
   placeHolderThree,
   RequiredName,
   nameLength,
RequiredEmail,
 EmailInvalid,
 RequiredDescrition,
 submit,
 QuestionOne,
 reserveTable,
 close
}){
  AOS.init({
    duration:2000
  })
return(
    <>
<Container data-aos = "fade-down" 
style={switchLight ? {backgroundColor:"#403d3d"}:{backgroundColor:"white"}}
 className="footerCont  d-flex justify-content-center align-items-start h-100">
  <Address 
  ligtAndDark = {switchLight}
  locationHeader ={locationHeader}
  location ={location}
  FollowUs={FollowUs}
   />
<FormValidation 
ligtAndDark = {switchLight}
ContactForm  = {ContactForm}
placeHolderOne = {placeHolderOne}
placeHolderTwo = {placeHolderTwo}
placeHolderThree = {placeHolderThree}
RequiredName = {RequiredName}
nameLength = {nameLength}
RequiredEmail = {RequiredEmail}
EmailInvalid = {EmailInvalid}
RequiredDescrition = {RequiredDescrition}
submit = {submit}
QuestionOne = {QuestionOne}
reserveTable = {reserveTable}
close ={close }
/>
</Container>
    </>
)
}  

export default FooterSection