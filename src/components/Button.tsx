import { type ReactNode } from 'react'
import './Button.css'

interface btnProps{
    children : ReactNode
    className?: ReactNode
    btnType? : 'submit' | 'reset' | 'button'  
    buttonStyle? : string
    buttonSize? : string
}

const btnStyles = ['btn--primary', 'btn--outline']

const btnSizes = ['btn--medium', 'btn--large']


export const Button = ({children , buttonStyle = btnStyles[0] , buttonSize = btnSizes[0]} : btnProps) => {

    return(
        <a className={`btn ${buttonStyle} ${buttonSize}`} href='/Resume_MarkTangon.pdf' download={"Resume_MarkTangon.pdf"} style={{textDecoration:"none"}}>
            {children}
        </a>
    )
}
