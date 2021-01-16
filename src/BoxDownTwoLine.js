import React from 'react'
import {useStyle} from './hooks'
const Line = ({styleCb, i}) => {
    return (
        <div style = {styleCb(i)}>
        </div>
    )
}
const BoxDownTwoLine = ({w, h, scale, onClick}) => {
    const {barStyle, lineStyle} = useStyle(w, h, scale)
    return (
        <React.Fragment>
            <div onClick = {onClick} style = {barStyle(w, h, scale)}>
            </div>
            {[0, 1].map(i => (<Line i = {i} styleCb = {lineStyle} key = {`line_${i}`}/>))}
        </React.Fragment>
    )
}

export default BoxDownTwoLine 