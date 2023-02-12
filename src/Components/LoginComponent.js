import { css, media } from 'glamor'
import React from 'react'
import TextInput from './Common/TextInput'
import LoginConfig from '../Configurations/LoginConfig.json'

const LoginComponent = () => {

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
                width: '25vw',
                height: 'auto',
                minHeight: '50vh',
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
            })
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
                fontSize: '2rem',
                fontFamily: "'Montserrat', sans-serif",
                paddingBottom: '1rem'
            })
        ),

        button: css(
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
                fontSize: '2rem',
                fontFamily: "'Montserrat', sans-serif",
                border: 'none',
                outline: 'none',
                marginTop: '2rem',
                backgroundColor: 'rgba(74, 20, 140, 1)',
                color: 'rgba(255, 250, 255, 1)',
                borderRadius: '10px',
                transition: 'transform 0.1s ease-in',
                cursor: 'pointer',
                ':hover': {
                    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)'
                },
                ':active': {
                    transform: 'scale(0.97)'
                }
            })
        )
    }

    return (
        <div {...styles.main}>
            <span {...styles.header}>Sign In</span>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'transparent',
                gap: 2
            }}>
            {
                LoginConfig.fields.map((data, key) => {
                    return (
                        <TextInput label={data.placeholder}
                            key={key}
                            isError={false}
                            color='rgba(0, 0, 0, 1)'
                            size={60}
                            activeColor='rgba(112, 13, 148, 1)' />
                    )
                })
            }
            </div>
            <span style={{
                textAlign: 'right',
                color: 'blue',
                textDecoration: '1px solid blue underline',
                cursor: 'pointer'
            }}>Forget Password</span>
            <button {...styles.button} disabled={true}>
                Sign In
            </button>
            <span style={{
                textAlign: 'center',
                color: 'blue',
                textDecorationStyle: 'solid',
                textDecorationThickness: '1px',
                textDecorationColor: 'blue',
                textDecorationLine: 'underline',
                marginTop: '20px',
                cursor: 'pointer'
            }}>Create New Bloggios Account</span>
        </div>
    )
}

export default LoginComponent