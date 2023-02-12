import { css, media } from 'glamor';
import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../../Services/WindowDimensions';
import LoginComponent from '../LoginComponent';


const CustomModal = ({onClose, showModal, children}) => {

  const {height, width} = useWindowDimensions();
  const screenDimensions = height*width/1000;

  const styles = {
    modal: css(
      media('(max-width: 576px)', {
        backgroundColor: 'red'
      }),
      media('(min-width: 578px) and (max-width: 768px)', {
        backgroundColor: 'green'
      }),
      media('(min-width: 769px) and (max-width: 992px)', {
        backgroundColor: 'blue'
      }),
      media('(min-width: 993px) ', {
        fontFamily: "'Inter', sans-serif",
        height: 'auto',
        minHeight: screenDimensions*0.1,
        width: 'auto',
        backgroundColor: 'rgba(243, 246, 253, 1)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '25px',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
      }),
    ),

    background: css(
      media('(max-width: 576px)', {
        backgroundColor: 'red'
      }),
      media('(min-width: 578px) and (max-width: 768px)', {
        backgroundColor: 'green'
      }),
      media('(min-width: 769px) and (max-width: 992px)', {
        backgroundColor: 'blue'
      }),
      media('(min-width: 993px) ', {
        fontFamily: "'Inter', sans-serif",
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
      }),
    ),
  }


  return (
    <>
      <div {...styles.background} onClick={onClose} style={{ visibility: showModal === true ? 'visible' : 'hidden' }} />
      <div {...styles.modal} style={{ visibility: showModal === true ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </>
  )
}

export default CustomModal