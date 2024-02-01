import { keyframes, styled } from '@stitches/react'

export const MessageAlert = styled('div', {
    position: 'absolute',
    top: '130px',
    right: '5px',
    color: '#fff',
    zIndex: 1,
    maxWidth: '400px',
    minWidth: '280px',
    textAlign: 'center',
    fontSize: '14px',
})

export const AlertContent = styled('div', {
    backgroundColor: '#ccc',
    borderRadius: '8px',
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
    'from': {
        transform: 'translateX(300px)' 
    },
    'to': {
        transform: 'translateX(0px)' 
    }
})

const timer = keyframes({
    'to': {
        width: '100%'
    }
})