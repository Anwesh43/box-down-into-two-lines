import {useState, useEffect} from 'react'

const delay = 20 
const scGap = 0.02 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            let currScale = 0 
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                }, delay)
            }
        }
    }
}

