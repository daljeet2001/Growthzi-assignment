import React from 'react'
import Navbar from '../components/navbar'
import RoomHero from "../components/RoomHero";
import Amenities from "../components/Amenities";
import ExtraServices from "../components/ExtraServices";
import RoomCards from "../components/RoomCards";
import {Footer} from "../components/Footer";


const RoomPage = () => {
  return (
    <div>
   
    <RoomHero />
    <RoomCards />
    <ExtraServices />
    <Amenities/>
    <Footer />
    </div>
  )
}

export default RoomPage
