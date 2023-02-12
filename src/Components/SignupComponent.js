import { css, media } from 'glamor'
import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../Services/WindowDimensions';
import CustomTextInput from './Common/CustomTextInput';
import SignupConfig from '../Configurations/SignupConfig.json'
import { CheckEmail, CheckUsername, Register } from '../RestService/UserService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignupComponent = (props) => {

  const { height, width } = useWindowDimensions();
  const fieldsData = SignupConfig.fields;
  const [callApi, setCallApi] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  })

  const [error, setError] = useState({
    errors: {},
    isError: false,
  })

  const [endIconData, setEndIconData] = useState({
    username: '',
    email: '',
    name: '',
    password: ''
  })

  const [endIconColor, setEndIconColor] = useState({
    username: '',
    email: '',
    name: '',
    password: ''
  })

  useEffect(() => {
    console.log(error)
  }, [error])

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
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
        backgroundColor: 'rgb(197 179 215)',
        borderRadius: 20,
        border: '1.6px solid rgb(197 179 215)',
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
        padding: (width * 0.2) * 0.07,
        paddingBottom: (width * 0.2) * 0.02,
        fontSize: (height) * 0.06,
        fontWeight: 800,
        alignSelf: 'center',
        wordSpacing: 4,
        letterSpacing: 8,
        textTransform: 'uppercase',
        textShadow: "2px 2px 6px rgba(55, 54, 54, 0.4)",
        cursor: 'pointer'
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
        cursor: 'pointer',
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
    setLoading(true)
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
        setLoading(false)
      })
      .catch((exception) => {
        console.error(exception)
        setError({
          errors: exception,
          isError: true
        })
        props.mountedError(exception)
        setLoading(false)
      })
  }

  const handleKeyUpEvent = (event, property) => {
    if (property === 'username' && data.username.length > 1) {
      CheckUsername(data.username)
        .then((response) => {
          setCallApi(response)
          if (!response) {
            setEndIconData({ ...endIconData, [property]: 'fa-circle-check' });
            setEndIconColor({ ...endIconColor, [property]: 'green' });
          }
          else {
            setEndIconData({ ...endIconData, [property]: 'fa-circle-xmark' });
            setEndIconColor({ ...endIconColor, [property]: 'red' });
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }

    else if (property === 'email' && data.email.length > 1) {
      CheckEmail(data.email)
        .then((response) => {
          setCallApi(response)
          if (!response) {
            setEndIconData({...endIconData, [property]: 'fa-circle-check' });
            setEndIconColor({ ...endIconColor, [property]: 'green' });
          }
          else {
            setEndIconData({ ...endIconData, [property]: 'fa-circle-xmark' });
            setEndIconColor({ ...endIconColor, [property]: 'red' });
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  return (
    <div className='d-flex' {...styles.card} >
      <div {...styles.header} onClick={()=> navigate('/')}>Bloggios</div>
      <span style={{ textAlign: 'center', wordSpacing: 2, fontSize: '25px'}}>Create Account</span>
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
            onKeyUp={(e) => handleKeyUpEvent(e, mapData.constraint)}
            id={mapData.constraint}
            endIconColor={mapData.constraint === 'username' ? endIconColor.username : mapData.constraint === 'email' ? endIconColor.email : ''}
            endIconCheck={mapData.constraint === 'username' ? endIconData.username : mapData.constraint === 'email' ? endIconData.email : ''}
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
          cursor: 'pointer'
        }}>
          Already have an Account ?
        </span>
      </div>
    </div>
  )
}

export default SignupComponent