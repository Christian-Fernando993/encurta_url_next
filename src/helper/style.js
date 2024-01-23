import { keyframes, styled } from '@stitches/react'

export const AlertStyle = styled('div', {
    position: 'absolute',
    top: 130,
    right: 5,
    zIndex: 2,
    maxWidth: '400px',
    minWidth: '280px',
    textAlign: 'center',
    fontSize: 14,
    animation: 'slide 1s',
})

export const AlertContent = styled('div', {
    backgroundColor: '#ccc',
    borderRadius: 8,
    width: '100%',
    padding: '1.3rem 1rem',
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
        content: "",
        width: 0,
        height: '2px',
        backgroundColor: 'red',
        position: 'absolute',
        left: 0,
        bottom: 0,
        animation: 'timer 3s ease-in-out',
    }
})


const slide = keyframes({
    'from':{
       transform: 'translateX(300px)' 
    },
    'to':{
        transform: 'translateX(0px)' 
    },
})

const timer = keyframes({
    'to': {
        width: '100%',
    }
})