import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import BoxDownTwoLine from './BoxDownTwoLine'

const Container = (props) => {
    const {scale, start} = useAnimatedScale()
    const {w, h} = useDimension()
    return (
        <React.Fragment>
            <BoxDownTwoLine w = {w} h = {h} scale  = {scale} onClick = {start}/>
        </React.Fragment>
    )
}

export default Container 