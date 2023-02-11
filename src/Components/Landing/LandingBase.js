import React from 'react'
import UserNavbar from '../Common/UserNavbar'

const LandingBase = ({ title = "Bloggios", children }) => {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#f3f6fd',
      minHeight: '100vh',
      minWidth: '100vw',
      height: 'auto',
      width: 'auto'
    }}>
      <UserNavbar />
      {children}
    </div>

  )
}

export default LandingBase