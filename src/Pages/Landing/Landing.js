import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import LandingBase from '../../Components/Landing/LandingBase'
import LoginComponent from '../../Components/LoginComponent'
import CustomModalStyle from '../../Styles/CustomModalStyle.css'

const Landing = () => {

  const [modalShow, setModalShow] = useState(false);

  return (
    <LandingBase>
      <LoginComponent/>
    </LandingBase>
  )
}

export default Landing