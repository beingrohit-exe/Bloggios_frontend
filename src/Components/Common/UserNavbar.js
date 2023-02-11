import { css, media } from 'glamor'
import React, { useState } from 'react'
import useWindowDimensions from '../../Services/WindowDimensions'
import man from '../../Images/man.png'
import { useNavigate, useNavigation } from 'react-router-dom'
import Landing from '../../Pages/Landing/Landing'
import Signup from '../../Pages/Signup/Signup'

const UserNavbar = () => {

    const { height, width } = useWindowDimensions();
    const [dropdownShow, setDropdownShow] = useState(false);
    const navigation = useNavigate();

    const styles = {
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
                backgroundColor: '#f3f6fd',
                minHeight: '80px',
                padding: '25px 25px',
                alignItems: 'center'
            })
        ),

        logoIcon: css(
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
                fontSize: 30,
                color: 'rgba(41, 40, 40, 0.9)'
            })
        ),

        searchWrapper: css(
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
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                height: '40px',
                display: 'flex',
                justifyContent: 'space-between',
                width: width * 0.3,
                boxShadow: '0 2px 6px 0 rgba(136,148,171,.2),0 24px 20px -24px rgba(71,82,107,.1)',
                overflow: 'hidden',
                paddingRight: '14px',
                alignItems: 'center'
            })
        ),

        searchInput: css(
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
                outline: 'none',
                height: '100%',
                border: 'none',
                flex: 1,
                padding: '0 20px',
                color: '#1f1c2e',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                fontSize: '20px'
            })
        ),

        rightIcons: css(
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
                fontSize: 25,
                display: 'flex',
                gap: 25,
                color: 'rgba(41, 40, 40, 0.9)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            })
        ),

        dropDown: css(
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
                height: 'auto',
                minHeight: '40px',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                width: '150px',
                position: 'absolute',
                top: '70px',
                right: '20px',
                borderRadius: '20px',
                boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)',
                padding: '20px 10px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                visibility: dropdownShow ? 'visible' : 'hidden',
                fontSize: '25px',
                transition: 'all 0.4s ease',
            })
        ),

        dropdownMenu: css(
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
                height: 'auto',
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: '10px',
                padding: '0 10px',
                ':hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }
            })
        )
    }
    
    return (
        <div className='d-flex flex-row justify-content-between' {...styles.main}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                height: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 40,
            }}>
                <i {...styles.logoIcon} class="fa-solid fa-bars"></i>
                <span style={{
                    fontWeight: 500,
                    letterSpacing: 4
                }} {...styles.logoIcon}>BLOGGIOS</span>
                <div {...styles.searchWrapper}>
                    <input {...styles.searchInput} type="text" placeholder='Search' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div>
                <div {...styles.rightIcons}>
                    <i className="fa-solid fa-bag-shopping"></i>
                    <i style={{
                        fontSize: 30,
                        color: 'rgba(0, 0, 0, 1)'
                    }} className="fa-regular fa-bell"></i>
                    <i className="fa-solid fa-house-user"></i>
                    <div style={{
                        height: 40,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        width: '2px'
                    }} />
                    <div
                    onMouseOver={()=> setDropdownShow(true)} onMouseOut={()=> setDropdownShow(false)}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 10,
                            cursor: 'pointer'
                        }}>
                        <div style={{
                            height: 40,
                            width: 40,
                            borderRadius: '50%',
                            display: 'flex'
                        }}>
                            <img width={40} height={40} src={man} alt="profile" />
                        </div>
                        <span style={{
                            fontSize: '25px'
                        }}>Profile</span>
                    </div>
                </div>
            </div>
            <div onMouseOver={()=> setDropdownShow(true)} onMouseOut={()=> setDropdownShow(false)} {...styles.dropDown}>
                <div {...styles.dropdownMenu} onClick={()=> navigation('/')}>Login</div>
                <div {...styles.dropdownMenu} onClick={()=> navigation('/signup')}>SignUp</div>
            </div>
        </div>
    )
}

export default UserNavbar