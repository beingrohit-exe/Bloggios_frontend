import { css, media } from 'glamor'
import React from 'react'

const TextInput = (props) => {

    const size = props.size;

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
                width: '100%',
                position: 'relative',
                height: size,
                overflow: 'hidden',
                '& input': {
                    width: '100%',
                    height: '100%',
                    color: props.color,
                    paddingTop: size * 0.4,
                    border: 'none',
                    backgroundColor: 'transparent',
                    fontSize: size * 0.34,
                    paddingRight: '2rem',
                },
                '& label': {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    pointerEvents: 'none',
                    borderBottom: `1px solid ${props.color}`,
                },
                '& label::after': {
                    content: " ",
                    position: 'absolute',
                    bottom: '-1px',
                    left: '0px',
                    width: '100%',
                    height: '100%',
                    borderBottom: `3px solid ${props.activeColor}`,
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.4s ease'
                },
                '& input:focus': {
                    outline: 'none'
                },
                '& input:focus + .label-name .content-name': {
                    transform: 'translateY(-150%)',
                    fontSize: size * 0.2,
                    left: '0px',
                    color: props.activeColor
                },
                '& input:valid + .label-name .content-name': {
                    transform: 'translateY(-150%)',
                    fontSize: size * 0.2,
                    left: '0px',
                    color: props.activeColor,
                },
                '& input:focus + .label-name::after': {
                    transform: 'translateX(0%)'
                },
                '& input:valid + .label-name::after': {
                    transform: 'translateX(0%)'
                },
            })
        ),

        label: css(
            {
                position: 'absolute',
                bottom: '0px',
                left: '0px',
                paddingBottom: size * 0.083,
                transition: 'transform 0.4s ease, font-size 0.4s ease',
                fontSize: size * 0.34,
            }
        )
    }

    return (
        <>
            <div {...styles.main}>
                <input type="text" name="text" autoComplete="off" required />
                <label htmlFor="text" className="label-name">
                    <span {...styles.label} className="content-name">
                        {props.label}
                    </span>
                    {props.isError && <i style={{
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        fontSize: '24px',
                        color: 'red'
                    }} className="fa-solid fa-circle-exclamation"></i>}
                </label>
            </div>
            <span style={{
                textAlign: 'right',
                color: props.isError ? 'red' : 'blue',
                visibility: props.helperText ? 'visible' : 'hidden'
            }}>{props.helperText ? props.helperText : 'Content'}</span>
        </>
    )
}

export default TextInput