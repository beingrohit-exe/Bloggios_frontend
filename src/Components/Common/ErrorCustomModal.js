import { Box, Modal, Typography } from '@mui/material'
import { css, media } from 'glamor';
import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../../Services/WindowDimensions';
import CustomModalStyle from '../../Styles/CustomModalStyle.css'

const ErrorCustomModal = (props) => {

  const [errorData, setErrorData] = useState();
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
        minWidth: '40vw',
        backgroundColor: 'rgba(255, 220, 220, 1)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '25px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '2px 2px 5px rgba(255, 0, 0, 0.5)'
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

    close: css(
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
        fontSize: '1.6rem',
        ':hover': {
          textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
          color: 'rgba(0, 0, 0, 0.7)'
        },
        ':active': {
          textShadow: 'none',
          color: 'rgba(0, 0, 0, 1)'
        }
      }),
    ),

    header: css(
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
        display: 'flex',
        justifyContent: 'space-between',
        margin: 20,
        height: 'auto',
        alignItems: 'center'
      }),
    )
  }

  useEffect(() => {
    console.warn(props.errors?.response?.data)
    setErrorData(props.errors?.response?.data)
  }, [props.errors])

  const exceptions = Object.values(errorData ? errorData : 'Something went wrong on Server Side')

  return (
    <>
      <div {...styles.background} onClick={props.onClose} style={{ visibility: props.showModal === true ? 'visible' : 'hidden' }} />
      <div {...styles.modal} style={{ visibility: props.showModal === true ? 'visible' : 'hidden' }}>
        <div {...styles.header}>
          <span style={{
            fontSize: '1.6rem',
            fontWeight: 600,
            letterSpacing: 4
          }}>BLOGGIOS</span>
          <i {...styles.close} onClick={props.onClose} className="fa-sharp fa-solid fa-circle-xmark" ></i>
        </div>
        <ul style={{
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '7px',
          marginLeft: '20px',
          marginRight: '20px',
          justifyContent: 'center'
        }}>
          {exceptions.map((data, key) => {
            return (
              <li style={{
                fontSize: '1rem'
              }} key={key}>
                <i style={{
                  padding: 0,
                  marginBottom: 0,
                  fontSize: 20,
                  marginRight: 10,
                  color: 'red'
                }} className="fa-solid fa-circle-exclamation"></i>
                {data}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default ErrorCustomModal