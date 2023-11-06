  import { useState,useRef } from 'react'
import './form.scss'
 import { Button,Modal,Form } from 'react-bootstrap'
 import emailjs from '@emailjs/browser';
import BroneForm from './BroneForm';
  function FormValidation({ligtAndDark,
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
    const form = useRef();


// modal opened and closed

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


    // valids
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [text,setText] = useState("")

// messages
    const [userMessage,setUserMessage] = useState("")
    const [emailMessage,setEmailMessage] = useState("")
    const [descriptionMessage,setDescriptionMessage] = useState("")
    const changeNameValues = (evt)=>{
      setUsername(evt.target.value)
    }
    const changeEmailValues = (evt)=>{
      setEmail(evt.target.value)
    }
    const changeMessageValues = (evt)=>{
      setText(evt.target.value)
    }

    function Validation(e){
e.preventDefault();
if (username === "" || username.length === 0 ) {
  setUserMessage(RequiredName);
 
    return false
}

if (username.length < 3) {
  setUserMessage(nameLength);
  return false
}
else{
  setUserMessage("")
}

if (email.length === 0 || email === '') {
  setEmailMessage(RequiredEmail)
  return false
}

if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
  setEmailMessage(EmailInvalid)
  return false
}



else{
  setEmailMessage("")
}

if(text.length === 0 || text === ""){
  setDescriptionMessage(RequiredDescrition)
  return false
}
else{
  setDescriptionMessage("");
  emailjs.sendForm('service_description', 'template_1lqrzyf', form.current, '8UH-SE6PQzrrKtIDL')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}
    }

  



return(
    <>
    <div  className="FormBlock w-100">
      <h2 style={ligtAndDark?{color:"white"}:{color:"black"}}>{ContactForm}</h2>
      <Form   ref={form} onSubmit={Validation}>


<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>{RequiredName}</Form.Label>
    <Form.Control
      type="text"
      placeholder="name@example.com"
      autoFocus
      name="from_name" 
      onChange={changeNameValues}
    />
    <span>{userMessage}</span>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label style ={ligtAndDark?{color:"white"}:{color:"black"}}>{RequiredEmail}</Form.Label>
    <Form.Control
      type="email"
      placeholder="email@example.com"
      autoFocus
      name="to_name" 
      onChange={changeEmailValues}
    />
    <span style={ligtAndDark?{color:"white"}:{color:"black"}}>{emailMessage}</span>
  </Form.Group>
  <Form.Group
    className="mb-3"
    controlId="exampleForm.ControlTextarea1"
  >
    <Form.Label style={ligtAndDark?{color:"white"}:{color:"black"}}>{RequiredDescrition}</Form.Label>
    <Form.Control onChange={changeMessageValues} as="textarea" rows={3} name="message" />
    <span style={ligtAndDark?{color:"white"}:{color:"black"}}>{descriptionMessage}</span>
  </Form.Group>
  <Button  onClick={Validation} variant ="success">{submit}</Button>
<Button className='ms-3' onClick={handleShow}>{QuestionOne}</Button>
</Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{reserveTable}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <BroneForm 
        submit = {submit}
         close ={close}
         RequiredName = {RequiredName}
         nameLength = {nameLength}
      RequiredEmail = {RequiredEmail}
       EmailInvalid = {EmailInvalid}
       RequiredDescrition = {RequiredDescrition}
         
         />
        </Modal.Body>
      </Modal>
    </div>
    </>
)
  }

  export default FormValidation