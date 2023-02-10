import { css, media } from 'glamor';
import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';
import CustomModal from '../../Components/Common/ErrorCustomModal';
import SignupComponent from '../../Components/SignupComponent'
import useWindowDimensions from '../../Services/WindowDimensions';
import SignupPageStyle from '../../Styles/SignupPage.css'


const Signup = () => {

    const { height, width } = useWindowDimensions();

    const [error, setError] = useState();
    const [modalShown, setModalShown] = useState(false);
    const [errorData, setErrorData] = useState();

    const getErrors = (error) => {
        setError(error)
    }

    useEffect(()=> {
        setModalShown(error ? true : false)
    }, [error])

    css.global('html, body', { padding: 0, margin: 0, boxSizing: 'border-box', overflowX: 'hidden', overflowY: 'scrollable' });

    return (
        <>
        <CustomModal showModal={modalShown} modalText={modalShown ? error : ''} onClose={()=> setModalShown(false)} onModal={modalShown} errors={error ? error : null} />
            <div className="wrapper herobg position-absolute" style={{ zIndex: -1 }}>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
                <div className="container">
                </div>
            </div>
            <div className='col-lg-6 col-sm-12 col-md-6 col-xs-12  d-flex justify-content-center align-items-center offset-lg-3 offset-md-3' style={{
                zindex: 100,
                position: 'absolute',
                top: '5%'
            }}>
                <SignupComponent mountedError={(error) => getErrors(error)} />
            </div>
        </>
    )
}

export default Signup