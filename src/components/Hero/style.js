import { styled } from '@stitches/react'

export const HeroStyle = styled('section', {
    paddingTop: '200px',
    '.box': {
        background: '#fff',
        borderRadius: '65px',
        padding: '40px 60px',
        height: '400',
        '.title': {
            marginBottom: '30px',
            h1: {
                color: '#3D324A',
                fontFamily: '$BROmnyBold',
                fontSize: '48px',
                fontWeight: 700,
                marginBottom: '40px',
            },
            p: {
                color: '#3D324A',
                fontFamily: '$BROmnyBold',
                fontSize: '24px',
                fontWeight: 700,
            }
        },
        '.input': {
            '.input-url': {
                width: '100%',
                maxWidth: '990px',
                height: '60px',
                borderRadius: '25px',
                padding: '15px 40px',
                background: 'rgba(90, 120, 255, 0.51)',
                color: 'rgba(0, 0, 0, 0.34)',
                fontFamily: '$BROmnyRegular',
                fontSize: '24px',
                fontWeight: 300,
                marginBottom: '40px',
            },
            '.bts': {
                '.btn': {
                    width: '113px',
                    height: '57px',
                    borderRadius: '25px',
                    background: '#5A78FF',
                    color: '#fff',
                    fontSize: '18px',
                    transition: 'all .3s',
                    '&:first-child':{
                        marginRight: '50px',
                    },
                    '&:hover': {
                        backgroundColor: '#3D3245',
                    }
                }
            }
        }
    }
})