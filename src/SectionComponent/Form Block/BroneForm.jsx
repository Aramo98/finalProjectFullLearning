import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import {Form,Button} from 'react-bootstrap'
 const BroneForm = ({submit,
  close, RequiredName,
  nameLength,
RequiredEmail,
EmailInvalid,
RequiredDescrition,}) => {
  const form = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);



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
setDescriptionMessage("")
e.preventDefault();

emailjs.sendForm('service_ymt959b', 'template_e70wxbr', form.current, '8UH-SE6PQzrrKtIDL')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}
}



















  
  

  return (

<>

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
              <Form.Label>{RequiredEmail}</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@example.com"
                autoFocus
                name="to_name" 
                onChange={changeEmailValues}
              />
              <span>{emailMessage}</span>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>{RequiredDescrition}</Form.Label>
              <Form.Control onChange={changeMessageValues} as="textarea" rows={3} name="message" />
              <span>{descriptionMessage}</span>
            </Form.Group>
          </Form>
    
    
          <Button variant="secondary" onClick={handleClose}>
            {close}
          </Button>
          <Button type="submit" value="Send" variant="primary" onClick={Validation}>
            {submit}
          </Button>
    

</>
   
  
  );
};

export default BroneForm