import { css, media } from 'glamor'
import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../Services/WindowDimensions';
import CustomTextInput from './Common/CustomTextInput';
import SignupConfig from '../Configurations/SignupConfig.json'
import { Register } from '../RestService/UserService';

const SignupComponent = () => {

  const { height, width } = useWindowDimensions();
  const fieldsData = SignupConfig.fields;

  const [data, setData] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  })

  const [eventValue, setEventValue] = useState("");

  useEffect(() => {
    console.log(eventValue)
  }, [data])

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
    setEventValue(event.target.id)
  };

  const styles = {

    card: css(
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
        width: width * 0.3,
        maxWidth: width * 0.3,
        minWidth: '28rem',
        height: 'auto',
        backgroundColor: 'rgba(223, 223, 223, 0.8)',
        borderRadius: 20,
        border: '1.6px solid rgba(223, 223, 223, 0.8)',
        flexDirection: 'column',
        boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)'
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
        fontFamily: "'Montserrat', sans-serif",
        padding: (width * 0.3) * 0.07,
        fontSize: (height * 0.8) * 0.06,
        fontWeight: 600,
        alignSelf: 'center',
        wordSpacing: 4,
        letterSpacing: 1,
      }),
    ),

    icons: css(
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
        fontSize: (height * 0.8) * 0.06,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
        marginBottom: (width * 0.3) * 0.07
      }),
    ),

    body: css(
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
        gap: 4,
        padding: (width * 0.3) * 0.04,
        flexDirection: 'column'
      }),
    ),

    footer: css(
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
        gap: 25,
        padding: (width * 0.3) * 0.06,
        flexDirection: 'column',
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
        backgroundColor: '#4a148c',
        width: '100%',
        display: 'flex',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: (width * 0.3) * 0.01,
        color: '#f5f5f5',
        fontSize: (width * 0.3) * 0.06,
        letterSpacing: 4,
        borderRadius: '16px',
        transition: 'box-shadow 0.2s ease-in',
        ':hover': {
          boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.4)',
        },
        ':active': {
          boxShadow: 'none',
          backgroundColor: 'rgba(74, 20, 140, 0.8)',
        }
      })
    ),
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data)
    Register(data)
      .then((response) => {
        console.log(response)
        setData({
          name: '',
          email: '',
          username: '',
          password: ''
        });
      })
      .catch((error)=> {
        console.error(error)
      })
  }

  return (
    <div className='d-flex' {...styles.card}>
      <div {...styles.header}>Create Account</div>
      <div {...styles.icons}>
        <i style={{ color: 'red', textShadow: '1px 1px 2px rgba(55, 54, 54, 0.4)' }} className="fa-brands fa-google-plus"></i>
        <i style={{ color: 'blue', textShadow: '1px 1px 2px rgba(55, 54, 54, 0.4)' }} className="fa-brands fa-facebook"></i>
        <i style={{ color: '#000', textShadow: '1px 1px 2px rgba(55, 54, 54, 0.4)' }} className="fa-brands fa-github"></i>
      </div>
      <span style={{ textAlign: 'center', wordSpacing: 2, }}>Or use email for Registration</span>
      <div {...styles.body}>
        {fieldsData.map((mapData, key) =>
          <CustomTextInput label='Name'
            key={key}
            startIcon={mapData.icon}
            size={34}
            activeColor='#4a148c'
            type={mapData.type}
            placeholder={mapData.label}
            onChangeData={(e) => handleChange(e, mapData.constraint)}
            id={mapData.constraint}
            value={mapData.value === data.name ? data.name : mapData.value === data.email ? data.email : mapData.value === data.username ? data.username : data.password} />
        )}
      </div>
      <div style={{
        fontSize: (34 * 0.5) * 0.7,
        paddingLeft: (width * 0.3) * 0.06,
        paddingRight: (width * 0.3) * 0.06
      }}>
        By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
      </div>
      <div {...styles.footer}>
        <div {...styles.button} onClick={handleSubmit}>
          Register
        </div>
        <span className='text-center' style={{
          textDecoration: 'underline',
          textDecorationColor: 'blue',
          textDecorationStyle: 'solid',
          textDecorationThickness: '2px',
          color: 'blue',
        }}>
          Already have an Account ?
        </span>
      </div>
    </div>
  )
}

export default SignupComponent