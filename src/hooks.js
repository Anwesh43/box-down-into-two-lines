import {useState, useEffect} from 'react'

const delay = 20 
const parts = 3 
const scGap = 0.02 / parts 
const hSizeFactor = 18
const wFactor = 9

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
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            
        }
    })
    return {
        w, 
        h
    }
}

const maxScale = (scale, i, n) => Math.max(0, scale - i / n)
const divideScale = (scale, i, n) => Math.min(1 / n, maxScale(scale, i, n)) * n 
const sinify = (scale) => Math.sin(scale * Math.PI)

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const sf1 = divideScale(sf, 0, parts)
    const sf2 = divideScale(sf, 1, parts)
    const position = 'absolute'
    const background = 'indigo'
    const size = Math.min(w, h) / wFactor 
    const hSize = Math.min(w, h) / hSizeFactor 
    return {
        barStyle() {
            const top = `${(h / 2 - hSize / 2) * (1 + sf2)}px`
            const left = `${w / 2 - size / 2}px`
            const width = `${size}px`
            const height = `${hSize}px`
            return {
                position, 
                top, 
                left,
                background, 
                width, 
                height
            }
        },
        lineStyle(i) {
            const top = `${h - hSize * sf1}px`
            const left = `${w / 2 - size / 2 + size * i}px`
            const width = `${Math.min(w, h) / 60}px`
            const height = `${hSize * sf1}px`
            return {
                top, 
                left, 
                position, 
                width, 
                height,
                background 
            }
        }
    }
}
