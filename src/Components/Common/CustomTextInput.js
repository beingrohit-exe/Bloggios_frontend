import { css, media } from 'glamor'
import React, { useRef, useState } from 'react'

const CustomTextInput = (props) => {

    const size = props.size ? props.size : 20;
    const color = props.color ? props.color : '#000'

    const textInput = useRef(null);

    const handleClick = () => {
        textInput.current.focus();
    }

    const [focused, setFocused] = useState(false);

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

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
                height: 'auto',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                alignContent: 'center',
                borderRadius: '14px',
                padding: 14,
                transition: 'all 0.1s ease-in',
                cursor: 'pointer',
                ':hover': {
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
                }
            })
        ),

        icon: css(
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
                fontSize: size * 0.8,
                color: focused ? props.activeColor : color,
                ':hover': {
                    textShadow: '1px 1px 2px rgba(55, 54, 54, 0.4)'
                }
            })
        ),

        input: css(
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
                width: '100%',
                backgroundColor: '#0000',
                outline: 'none',
                borderWidth: '0 0 1px 0',
                borderStyle: 'solid',
                borderColor: '#000',
                fontSize: size * 0.5,
                paddingLeft: 4,
                height: size,
                ':focus': {
                    borderColor: props.activeColor ? props.activeColor : "#000",
                    borderWidth: '0 0 2px 0'
                }
            })
        ),

    }
    return (
        <div {...styles.main} onClick={() => handleClick()}>
            {props.startIcon && <i {...styles.icon} className={`fa-sharp fa-solid ${props.startIcon}`}></i>}
            <input type={props.type}
                {...styles.input}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={textInput}
                onChange={props.onChangeData}
                value={props.valueData}
                id={props.id}
                placeholder={props.placeholder} />
        </div>
    )
}

export default CustomTextInput