import { styled } from "@stitches/react";
import { Container } from '@/styles/global';

export const HeaderStyle = styled('header', {
    position: 'absolute',
    top: 0,
    left: 0, 
    width: '100%',
    height: '100px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    [`${Container}`]: {
        '.logo': {
            width: '187px',
        },
    },

    '@media (max-width: 640px)': {
        [`${Container}`]: {
            display: 'flex',
            justifyContent: 'center',
            '.logo': {
                width: '150px',
            }
        }
    }
})