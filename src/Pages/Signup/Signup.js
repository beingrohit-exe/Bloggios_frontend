import { css, media } from 'glamor';
import React from 'react'
import { UNSAFE_DataRouterStateContext } from 'react-router-dom';
import SignupComponent from '../../Components/SignupComponent'
import useWindowDimensions from '../../Services/WindowDimensions';

const Signup = () => {

    const { height, width } = useWindowDimensions();

    css.global('html, body', { padding: 0, margin: 0, boxSizing: 'border-box', overflowY: 'hidden' });

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
                zIndex: 1
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
                textShadow: "2px 2px 4px rgba(55, 54, 54, 0.4)",
                color: '#4a148c',
                transition: 'all 0.4s ease-in',
                '::after': {
                    content: " ",
                    height: height*1,
                    width: width*0.4,
                    transform: 'rotate(40deg)',
                    background: '#e1bee7',
                    position: 'absolute',
                    webkitTransition: 'all 0.5s',
                    transition: 'all 0.5s',
                    top: height*1,
                    left: -width*0.4,
                    zIndex: '-1',
                    borderBottomRightRadius: '200px'
                },
                '::before': {
                    content: 'Concatenate Perceptions',
                    fontSize: '1.6rem',
                    textShadow: 'none',
                    position: 'absolute',
                    top: height*1.2,
                    transition: 'all 0.5s',
                    fontWeight: 400,
                    letterSpacing: '1px',
                    wordSpacing: '4px',
                    color: '#f5f5f5',
                    height: height*0.1,
                    textAlign: 'center',
                    paddingTop: (height*0.1)*0.25,
                    width: width*0.41,
                    borderRadius: '40px',
                    boxShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                },
                ':hover': {
                    //textShadow: '-2px 2px 0 #4a148c, 2px 2px 0 #4a148c, 2px -2px 0 #4a148c, -2px -2px 0 #4a148c',
                    //color: '#7b1fa2',
                    textShadow: "4px 4px 4px rgba(55, 54, 54, 0.6)",
                    transition: 'all 0.2s ease-in',
                },
                ':hover:after': {
                    top: -height*0.4,
                    left: -width*0.04,
                },
                ':hover:before': {
                    top: height*0.2 + width*0.07 + 50,
                    backgroundColor: '#4a148c',
                    left: (width/2)*0.1,
                }
            }),
        ),

    
    }

    return (
        <div className="d-flex row" {...SignupStyle.main}>
            <div className=' col-lg-6 col-sm-12 col-md-6 col-xs-12 flex-column' {...SignupStyle.leftContainer}>
                <p {...SignupStyle.logo}>Bloggios</p>
            </div>
            <div className='col-lg-6 col-sm-12 col-md-6 col-xs-12 d-flex'>
                <SignupComponent />
            </div>
        </div>
    )
}

export default Signup