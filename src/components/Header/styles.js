import { styled } from "@stitches/react";
import { Container } from '@/styles/global';

export const HeaderStyle = styled('header', {
    position: 'absolute',
    top: 0,
    left: 0, 
    width: '100%',
    height: '100px',
    borderBottom: '1.5px solid rgba(255, 255, 155, .1)',
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: '#f4f4f1',
    '.logo': {
        width: '187px',
        // margin: '0 auto',
    },
    '&:before': {
        content: '',
        width: 100,
        position: 'absolute',
        left: '350px',
        bottom: '-2px',
        borderTop: '2px solid #45fdd6',
    },
})


    // [`${Container}`]: {
    //     // '.logo':{
    //     //     margin: '0 auto',
    //     // }
    // }