


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './componentPage/Home'
import Partners from './componentPage/Partners'
import Service from './componentPage/Service';

import RestaurantLogo from './51417a6d3ee82530e9117219a42fd762.png'
import { FaBars, FaTimes, FaSun, FaMoon, FaHome, FaNewspaper, FaStar} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import ClearSun from './weatherIcon/ClearSun.png'
import FewCloud from './weatherIcon/FewCloud.png'
import Cloudy from './weatherIcon/cloudy.png'
import Clouds from './weatherIcon/clouds.png'
import CloudRain from './weatherIcon/CloudRain.png'
import Rain from './weatherIcon/rain.png'
import Storm from './weatherIcon/storm.png'
import SnowFlake from './weatherIcon/snowflake.png'
import Mist from './weatherIcon/mist.png';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import FooterSection from './SectionComponent/FooterSection';
import './App.scss'
import TimerBlock from "./TimerBlock";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
function App() {
  const { t } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language)
  }

  const [clicked, setClicked] = useState(false)
  const [switchLight, setSwitchLight] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("switchlight"));
    if (data !== false) setSwitchLight(JSON.parse(data))

  }, [])


  useEffect(() => {
    localStorage.setItem("switchlight", JSON.stringify(switchLight))
  }, [switchLight])

  const Url = {
    key: "090f65e66dee851e61d22e9e51a0d622",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [type, setType] = useState("");
  const [date, setDate] = useState("")
  const [icon, setIcon] = useState("")
  const HandleSearch = () => {
    axios.get(`${Url.base}weather?q=${type}&appid=${Url.key}`)
      .then((response) => {
        setDate(response.data)
        console.log(date);

        if (response.data.weather[0].icon === "01d" || response.data.weather[0].icon === "01n") {
          setIcon(ClearSun)
        }
        else if (response.data.weather[0].icon === "02d" || response.data.weather[0].icon === "02n") {
          setIcon(FewCloud)
        }

        else if (response.data.weather[0].icon === "03d" || response.data.weather[0].icon === "03n") {
          setIcon(Cloudy)
        }

        else if (response.data.weather[0].icon === "04d" || response.data.weather[0].icon === "04n") {
          setIcon(Clouds)
        }
        else if (response.data.weather[0].icon === "09d" || response.data.weather[0].icon === "09n") {
          setIcon(CloudRain)
        }
        else if (response.data.weather[0].icon === "10d" || response.data.weather[0].icon === "10n") {
          setIcon(Rain)
        }

        else if (response.data.weather[0].icon === "11d" || response.data.weather[0].icon === "11n") {
          setIcon(Storm)
        }
        else if (response.data.weather[0].icon === "13d" || response.data.weather[0].icon === "13n") {
          setIcon(SnowFlake)
        }
        else if (response.data.weather[0].icon === "50d" || response.data.weather[0].icon === "50n") {
          setIcon(Mist)
        }
      });
  }
  return (
    <>

      <div style={clicked ? { width: "300px" } : { width: "0" }} className="navBlock bg-dark">
        <div className="aplicationBlock d-flex justify-content-center align-items-center flex-column gap-3">
          <div className="twistBlock p-3 w-100 d-flex justify-content-between align-items-center">
            <div onClick={() => setSwitchLight(!switchLight)} className="lightDarkBlock">
              <div style={switchLight ? { left: "35px" } : { left: "3px" }} className='iconBlock'>{switchLight ? <FaMoon style={{ backgroundColor: "blue", color: "yellow" }} /> : <FaSun />}</div>
            </div>
            <div className='Clock d-flex justify-content-center align-items-center'>
              <TimerBlock />
            </div>
            <div className='result d-flex justify-content-center align-items-center'>
              {(typeof date.main !== "undefined" || typeof date.weather !== "undefined") ? (
                <>
                  <div style={{ width: "30px", height: "30px" }} className='img'>
                    <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={type !== date.name ? "" : icon} alt="" />
                  </div>
                  <div className="countryNamevd-flex justify-content-center align-items-center">
                    <h4 className="text-success fs-6">{type !== date.name ? "" : date.name}</h4>
                    <p className="text-success fs-6">{type !== date.name ? "" : Math.round(date.main.temp) - 273}<sup>O</sup> C</p>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>


          <div className="weatherBlock">
            <div className="formBlock">
              <Form className='d-flex justify-content-center align-items-center' onSubmit={(evt) => evt.preventDefault()}>
                <Form.Group>
                  <Form.Control onChange={(evt) => setType(evt.target.value)} value={type} type="text" placeholder="Your Country" />
                </Form.Group>
                <Button onClick={HandleSearch} variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <ul style={{ marginTop: "20%" }}>


              <li><a className='Link' href="/"><FaHome /> {t('home')} </a></li>
              <li><a className='Link' href="/partners"><FaStar />  {t('partners')}</a></li>
              <li><a className='Link' href="/service"><FaNewspaper />  {t('service')}</a></li>
           

            </ul>
          </div>
        </div>


        <div className="languageBlock">


          <button onClick={() => changeLanguage("am")}>Հայ</button>
          <button onClick={() => changeLanguage("en")}>Eng</button>
          <button onClick={() => changeLanguage("ru")}>Рус</button>
        </div>
      </div>
      <header style={switchLight ? { backgroundColor: "#403d3d" } : { backgroundColor: "white" }}>

        <div className="logoBlock">
          <a href="#">
            <img className="card-img-top" src={RestaurantLogo} alt="" />
          </a>
        </div>


        <div className="iconBtn" onClick={() => setClicked(!clicked)}>
          {clicked ? <FaTimes style={switchLight ? { color: "white" } : { color: "black" }} /> : <FaBars style={switchLight ? { color: "white" } : { color: "black" }} />}
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home switchLight={switchLight}
            ourPassion={t("ourPassion")}
            menu={t("menu")}
            readMore={t("readMore")}
            ReadLess = {t("ReadLess")}
            catering={t("catering")}
            orderParagraph={t("orderParagraph")}
            freshSalads={t("freshSalads")}
            partyPlatters={t("partyPlatters")}
            seaFood={t("seaFood")}
            vegganDesserts={t("vegganDesserts")}
            Our_Menu={t("Our_Menu")}
            Excellent_Services={t("Excellent_Services")}
            Team={t("Team")}
            nameAndSurname={t("nameAndSurname")}
            blockHeaderOne={t("blockHeaderOne")}
            blockHeaderTwo={t("blockHeaderTwo")}
            blockHeaderThree={t("blockHeaderThree")}
            blockParagraphOne={t("blockParagraphOne")}
            blockParagraphTwo={t("blockParagraphTwo")}
            blockParagraphThree={t("blockParagraphThree")}
            textShowing={t("textShowing")}
            chefNameSurNameOne={t("chefNameSurNameOne")}
            chefNameSurNameTwo={t("chefNameSurNameTwo")}
            chefNameSurNameThree={t("chefNameSurNameThree")}
            chefNameSurNameFour={t("chefNameSurNameFour")}
            RankOne={t("RankOne")}
            RankTwo={t("RankTwo")}
            RankThree={t("RankThree")}
            ageChef={t("ageChef")}
            YearsOld={t("YearsOld")}
            Specialy={t("Specialy")}
            Website={t("Website")}
            MenuHeaderOne ={t("MenuHeaderOne")} 
            MenuHeaderTwo ={t("MenuHeaderTwo")}
            MenuHeaderThree ={t("MenuHeaderThree")}
            PizzaRecipe ={t("PizzaRecipe")}
            SaladRecipe ={t("SaladRecipe")}
            DessertRecipe ={t("DessertRecipe")}
            locationHeader ={t("locationHeader")}
            location  ={t("location")}
            FollowUs  ={t("FollowUs")}
            SeeInfo = {t("SeeInfo")}
           home={t('home')} 
           close ={t("close")}
          />} />
          <Route 
          path="partners" 
          element={<Partners switchLight={switchLight}
            Partners = {t("partners")}
            circleHeader = {t("PartnersCircleHeader")}

          />} />
          <Route path="service" element={<Service
          switchLight={switchLight}
           ServiceHeaderOne ={t("ServiceHeaderOne")}
           ServiceHeaderTwo ={t("ServiceHeaderTwo")}
          ServiceHeaderThree ={t("ServiceHeaderThree")}

          OurService = {t("OurService")}
          />} />
          
        </Routes>
      </BrowserRouter>

      <FooterSection 
      switchLight={switchLight} 
      locationHeader ={t("locationHeader")}
            location  ={t("location")}
            FollowUs  ={t("FollowUs")}
               ContactForm = {t("ContactForm")}
              placeHolderOne = {t("placeHolderOne")}
              placeHolderTwo = {t("placeHolderTwo")}
              placeHolderThree={t("placeHolderThree")}
              RequiredName = {t("RequiredName")}
              nameLength = {t("nameLength")}
           RequiredEmail = {t("RequiredEmail")}
            EmailInvalid = {t("EmailInvalid")}
            RequiredDescrition = {t("RequiredDescrition")}
            submit = {t("submit")}
            QuestionOne = {t("QuestionOne")}
            reserveTable ={t("reserveTable")}
            close ={t("close")}
      />
    </>






  );
}

export default App;
