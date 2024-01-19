import { globalCss, styled } from "./index";

export const globalStyles = globalCss({
    '*': {
        padding: 0,
        margin: 0,
        border: 0,
        boxSizing: 'border-box',
        fontFamily: '$BROmnyBold',
        listStyle: 'none',
        '-webkit-font-smoothing': 'antialiased',
    },
    body: {
        background: '$azul',
    },
    img: {
        maxWidth: '100%',
        display: 'block',
    },
    button: {
        cursor: 'pointer',
        background: 'transparent',
    }
}) 


export const Container = styled('div', {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 15px',
    '@media(max-width: 991px)': {
        padding: '0 30px',
    },
    '@media(max-width: 640px)': {
        padding: '0 15px',
    }
})