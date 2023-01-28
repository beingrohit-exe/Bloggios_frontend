import { css, media } from 'glamor';
import React from 'react'
import SignupComponent from '../../Components/SignupComponent'
import useWindowDimensions from '../../Services/WindowDimensions';


const Signup = () => {

    const { height, width } = useWindowDimensions();

    css.global('html, body', { padding: 0, margin: 0, boxSizing: 'border-box', overflowX: 'hidden', overflowY: 'scrollable' });

    const SignupStyle = {

        main: css(
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
                backgroundColor: '#f5f5f5',
                userSelect: 'none',
            }),
        ),

        leftContainer: css(
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
                backgroundColor: '#f5f5f5',
                userSelect: 'none',
                zIndex: 2
            }),
        ),

        logo: css(
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
                marginTop: height * 0.2,
                marginLeft: (width / 2) * 0.1,
                fontSize: width * 0.07,
                textTransform: 'uppercase',
                fontWeight: '900',
                color: '#4a148c',
                letterSpacing: '4',
                textShadow: "4px 4px 4px rgba(55, 54, 54, 0.6)",
                transition: 'all 0.2s ease-in',
                zIndex: 10,
                '::after': {
                    content: " ",
                    height: height * 0.7,
                    width: width * 0.4,
                    background: '#e1bee7',
                    position: 'fixed',
                    webkitTransition: 'all 0.5s',
                    transition: 'all 0.5s',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    borderRadius: '0% 100% 80% 0% / 0% 100% 20% 0%'
                },
                '::before': {
                    content: 'Concatenate Perceptions',
                    fontSize: width * 0.014,
                    textShadow: 'none',
                    position: 'absolute',
                    transition: 'all 0.5s',
                    fontWeight: 400,
                    letterSpacing: '1px',
                    wordSpacing: '4px',
                    color: '#f5f5f5',
                    textAlign: 'center',
                    padding: 20,
                    paddingLeft: 25,
                    paddingRight: 25,
                    borderRadius: '40px',
                    boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    top: height * 0.2 + width * 0.07 + 70,
                    backgroundColor: '#4a148c',
                    left: (width / 2) * 0.1,
                },
            }),
        ),


    }

    return (
        <div className="d-flex row" {...SignupStyle.main}>
            <div className=' col-lg-6 col-sm-12 col-md-6 col-xs-12 flex-column' {...SignupStyle.leftContainer}>
                <p {...SignupStyle.logo}>Bloggios</p>
            </div>
            <div className='col-lg-6 col-sm-12 col-md-6 col-xs-12 d-flex justify-content-center align-items-center'>
                <SignupComponent />
            </div>
        </div>
    )
}

export default Signup