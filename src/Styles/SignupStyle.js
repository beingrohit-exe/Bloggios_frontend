import { css, media } from "glamor";

const SignupStyle = {

    main : css(
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
            backgroundColor: '#ba68c8',
            userSelect: 'none',
        }),
    ),

    leftContainer : css(
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
            backgroundColor: '#616161',
            userSelect: 'none',
        }),
    )
}

export default SignupStyle;

//             marginTop: '1.6rem',
//             border: '2px solid rgba(0, 0, 0, 0.2)',
//             height: 'auto',
//             width: '500px',
//             dispaly: 'flex',
//             paddingBottom: '0.8rem',
//             flexDirection: 'column',
//             position: 'relative',
//             backgroundColor: 'white',
//             borderTopRadius: '10px',
//             borderRadius: '20px',
//             boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',